import React from 'react';
import Footer from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
   it('displays the homepage by default', () => {
    render(<App />);
  
    let header = screen.getByText("Rancid");
    expect(rancidElement).toBeInTheDocument();

    it('Should work', () => {
      expect(true).toBeTruthy()
    })
});