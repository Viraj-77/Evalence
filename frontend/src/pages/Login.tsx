import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuth } from '../AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const navError = (location.state as any)?.error;
  const navSuccess = (location.state as any)?.success;
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginFormInputs) => {
    setServerError(null);
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.error) {
        setServerError(result.error);
        setLoading(false);
        return;
      }
      await login(result.token, result.refreshToken);
      navigate('/profile');
    } catch (e) {
      setServerError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F7F8FA' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, minWidth: 340 }}>
        <Typography variant="h4" color="primary" fontWeight={700} mb={2} align="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            autoComplete="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' } })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            autoComplete="current-password"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          {(serverError || navError) && (
            <Typography color="error" mt={1}>
              {serverError || navError}
            </Typography>
          )}
          {navSuccess && (
            <Typography color="success.main" mt={1}>
              {navSuccess}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: 2, py: 1.5, fontWeight: 600 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login; 