import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Login from '../components/Auth/Login'; 
import '@testing-library/jest-dom'; 

describe('Login Component', () => {
  test('renders login form with inputs and button', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument(); 
  });
});
