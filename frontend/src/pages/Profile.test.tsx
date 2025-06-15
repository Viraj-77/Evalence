import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ firstName: 'Test', lastName: 'User', email: 'test@example.com' })
    })
  ) as jest.Mock;
});

describe('Profile page', () => {
  it('renders without crashing and shows main UI elements', async () => {
    render(<Profile />);
    expect(await screen.findByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save changes/i })).toBeInTheDocument();
  });
}); 