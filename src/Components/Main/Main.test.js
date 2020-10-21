import React from 'react';
import Main from './Main';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Main', () => {
   
    it('Should work', () => {
      let user = {
        id: 0
      }
      render(<Main user={user}></Main>)
      expect(screen.getByText('Categories')).toBeInTheDocument();
      expect(screen.getByText('Movie Details')).toBeInTheDocument();
    })
})