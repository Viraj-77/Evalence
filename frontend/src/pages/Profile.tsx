import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Paper, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';

type ProfileFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
};

const Profile: React.FC = () => {
  // TODO: Replace with actual user data from context or API
  const defaultValues = { firstName: '', lastName: '', email: '' };
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormInputs>({ defaultValues });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (data: ProfileFormInputs) => {
    setServerError(null);
    setSuccess(null);
    setSubmitLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/profile/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ firstName: data.firstName, lastName: data.lastName }),
      });
      const result = await res.json();
      if (result.error) {
        setServerError(result.error);
        setSubmitLoading(false);
        return;
      }
      setSuccess('Profile updated!');
    } catch (e) {
      setServerError('Network error. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F7F8FA' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, minWidth: 340 }}>
        <Typography variant="h4" color="primary" fontWeight={700} mb={2} align="center">
          My Profile
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            {...register('firstName', { required: 'First name is required' })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            {...register('lastName', { required: 'Last name is required' })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
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
            disabled={submitLoading}
          >
            {submitLoading ? <CircularProgress size={24} color="inherit" /> : 'Save Changes'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Profile; 