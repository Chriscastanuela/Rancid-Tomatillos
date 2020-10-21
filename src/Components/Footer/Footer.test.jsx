import React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Footer', () => {
   it('displays the h1 in the footer', () => {
    render(<Footer />);

    expect(screen.getByText("Rancid")).toBeInTheDocument();
    });

});