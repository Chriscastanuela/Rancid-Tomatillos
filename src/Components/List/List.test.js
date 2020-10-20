import React from 'react';
import List from './List';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('List', () => {
   
    it('Should render a p tag with the text "Rating: "', () => {
      render(<List/>);
      let rating = screen.getByText('Rating: ')
      expect(rating).toBeInTheDocument();
    })
})