import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PasswordResetConfirm from './PasswordResetConfirm';

describe('PasswordResetConfirm page', () => {
  it('renders without crashing and shows main UI elements', () => {
    render(
      <BrowserRouter>
        <PasswordResetConfirm />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/reset token/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/new password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm new password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /set password/i })).toBeInTheDocument();
  });
}); 