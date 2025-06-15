import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type PasswordResetRequestInputs = {
  email: string;
};

const PasswordResetRequest: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<PasswordResetRequestInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: PasswordResetRequestInputs) => {
    setServerError(null);
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/password-reset-request`, {
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
      navigate('/login', { state: { success: result.message || 'If this email exists, a reset link will be sent.' } });
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
          Reset Password
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: 2, py: 1.5, fontWeight: 600 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Reset Link'}
          </Button>
          {serverError && (
            <Typography color="error" mt={1}>
              {serverError}
            </Typography>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default PasswordResetRequest; 