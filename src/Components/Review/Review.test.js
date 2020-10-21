import React from 'react';
import Review from './Review';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

let theUpdater = jest.fn(x => x + 1)

let reviews = [ {
  created_at: "2020-10-18T21:44:45.703Z",
  id: 3127,
  movie_id: 479259,
  rating: 10,
  updated_at: "2020-10-18T21:44:45.703Z",
  user_id: 86,
} ]

let userLists = []

let userRatings = [ {
  created_at: "2020-10-18T21:44:45.703Z",
  id: 3127,
  movie_id: 479259,
  rating: 10,
  updated_at: "2020-10-18T21:44:45.703Z",
  user_id: 86,
  } ]

let user = {email: "claire@turing.io", id: 86, name: "Claire"}



describe('Review', () => {
   
    it('Should work', () => {
      render(<Review reviews={reviews} theUpdater={theUpdater} userLists={userLists} userRatings={[userRatings]} user={user}/>)

      expect(screen.getByText('You do not have any ratings at this time').toBeInTheDocument)
    })
})