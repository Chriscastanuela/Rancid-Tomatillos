import React from 'react';
import ReviewSection from './ReviewSection';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ReviewSection', () => {

    it('Should render to the dom', () => {
      render(<ReviewSection />)

      let reviewParagraph = screen.getByText(/log in if you would like to see your ratings./i)
      expect(reviewParagraph).toBeInTheDocument()
    })
})