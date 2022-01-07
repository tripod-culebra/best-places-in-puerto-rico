import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App.js';

test('renders Auth Sign In for Create Account', async () => {
    render(<App />);
    await waitFor(() => {
        const signInElement = screen.queryByText(/Create Account/i);
        expect(signInElement).toBeInTheDocument();
    });
});
