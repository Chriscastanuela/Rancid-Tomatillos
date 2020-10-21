import React from 'react';
import ListSection from './ListSection';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ListSection', () => {
   let user = {
     id: 0
   }
    it('Should work', () => {
      render(<ListSection user={user}/>)
      expect(screen.getByText('Your Ratings')).toBeInTheDocument();
      expect(screen.getByText('Log in if you would like to see your ratings.')).toBeInTheDocument();
      expect(screen.getByText('New Releases')).toBeInTheDocument();
      expect(screen.getByText('Fan Favorites')).toBeInTheDocument();
      expect(screen.getByText('Lowest Rated')).toBeInTheDocument();
      expect(screen.getByText('All')).toBeInTheDocument();
    })
})