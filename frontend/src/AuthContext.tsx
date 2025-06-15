import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (token: string, refreshToken: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchProfile(storedToken);
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  const fetchProfile = async (jwt: string) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/profile`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const result = await res.json();
      if (result && !result.error) {
        setUser(result);
        setError(null);
      } else {
        setUser(null);
        setToken(null);
        setError(result.error || 'Session expired. Please log in again.');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
      }
    } catch {
      setUser(null);
      setToken(null);
      setError('Network error. Please try again.');
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (jwt: string, refreshToken: string) => {
    localStorage.setItem('token', jwt);
    localStorage.setItem('refreshToken', refreshToken);
    setToken(jwt);
    setLoading(true);
    await fetchProfile(jwt);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}; 