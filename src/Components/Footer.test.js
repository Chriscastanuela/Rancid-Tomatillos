import React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';
// import { screen } from 'yo-momma'
import '@testing-library/jest-dom';

describe('Footer', () => {
   it('displays the h1 in the footer', () => {
      render(<Footer />);
    console.log(expect(screen.getByText('Rancid')))
     expect(screen.getByText('Rancid')).toBeInTheDocument();
    });

    it('Should work', () => {
      expect(true).toBeTruthy()
    })
});