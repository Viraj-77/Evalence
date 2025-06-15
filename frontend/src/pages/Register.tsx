import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type RegisterFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormInputs>();
  const password = watch('password', '');
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: RegisterFormInputs) => {
    setServerError(null);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          firstName: 'First', // TODO: Replace with actual field if added
          lastName: 'Last',   // TODO: Replace with actual field if added
        }),
      });
      const result = await res.json();
      if (result.error) {
        setServerError(result.error);
        return;
      }
      navigate('/login', { state: { success: 'Registration successful! You can now log in.' } });
    } catch (e) {
      setServerError('Network error. Please try again.');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F7F8FA' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, minWidth: 340 }}>
        <Typography variant="h4" color="primary" fontWeight={700} mb={2} align="center">
          Register
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
            autoComplete="new-password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters' },
              validate: value =>
                /[A-Z]/.test(value) || 'Must contain an uppercase letter',
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            autoComplete="new-password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: value => value === password || 'Passwords do not match',
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          {serverError && (
            <Typography color="error" mt={1}>
              {serverError}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: 2, py: 1.5, fontWeight: 600 }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register; 