import React from 'react';
import Login from './Login';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Login', () => {
   
    it('Should work', () => {
      render(<Login></Login>)
      expect(screen.getByText('Login').toBeInTheDocument);
      expect(screen.getByPlaceholderText('Username').toBeInTheDocument);
      expect(screen.getByPlaceholderText('Password').toBeInTheDocument);
    })
})