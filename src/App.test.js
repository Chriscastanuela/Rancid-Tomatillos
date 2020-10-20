import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
   it('displays the homepage by default', () => {
    render(<App />);

    let mainHeader = screen.getByRole('heading', { name: /rancid tomatillos/i })
    let mainFooter = screen.getByText("Rancid");

    

    expect(mainHeader).toBeInTheDocument()
    expect(mainFooter).toBeInTheDocument();

   })

    it('Should work', () => {
      expect(true).toBeTruthy()
    })
})