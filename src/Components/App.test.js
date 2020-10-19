import React from 'react';
import Footer from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
   it('displays the h1 in the footer', () => {
    render(<Footer />);
  
    let rancidElement = screen.getByText("Rancid");
    expect(rancidElement).toBeInTheDocument();

    it('Should work', () => {
      expect(true).toBeTruthy()
    })
});