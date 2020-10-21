import React from 'react';
import Movies from './Movies';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';



describe('Movies', () => {

    it('should be loading by default', () => {
      render (<Movies />);
      const loader = screen.getByText('Loading');

      expect(loader).toBeInTheDocument();
    })
})