import React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Footer', () => {
   it('displays the h1 in the footer', () => {
      
    
    render(
    <Footer />
    );


    console.log(expect(screen.getByRole('heading', { name: /rancid/i })))
     expect(screen.getByRole('heading', { name: /rancid/i })).toBeInTheDocument();

    screen.debug()
    let rancidElement = screen.getByText('Rancid')

    console.log(rancidElement)
    });

    it('Should work', () => {
      expect(true).toBeTruthy()
    })
});