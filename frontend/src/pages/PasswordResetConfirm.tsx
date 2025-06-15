import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';

type PasswordResetConfirmInputs = {
  password: string;
  confirmPassword: string;
};

const PasswordResetConfirm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PasswordResetConfirmInputs>();
  const password = watch('password', '');
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [token, setToken] = useState(''); // For now, allow manual entry
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: PasswordResetConfirmInputs) => {
    setServerError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/password-reset-confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: data.password }),
      });
      const result = await res.json();
      if (result.error) {
        setServerError(result.error);
        setLoading(false);
        return;
      }
      setSuccess(result.message || 'Password has been reset!');
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
          Set New Password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Reset Token"
            fullWidth
            margin="normal"
            value={token}
            onChange={e => setToken(e.target.value)}
            required
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            autoComplete="new-password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters' },
              validate: value => /[A-Z]/.test(value) || 'Must contain an uppercase letter',
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label="Confirm New Password"
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: 2, py: 1.5, fontWeight: 600 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Set Password'}
          </Button>
          {serverError && (
            <Typography color="error" mt={1}>
              {serverError}
            </Typography>
          )}
          {success && (
            <Typography color="success.main" mt={1}>
              {success}
            </Typography>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default PasswordResetConfirm; 