import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PasswordResetRequest from './PasswordResetRequest';

describe('PasswordResetRequest page', () => {
  it('renders without crashing and shows main UI elements', () => {
    render(
      <BrowserRouter>
        <PasswordResetRequest />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument();
  });
}); 