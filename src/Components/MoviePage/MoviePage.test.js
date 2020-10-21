import React from 'react';
import MoviePage from './MoviePage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const theUpdater = jest.fn()
const updateUserRatings = jest.fn()
const updateUserLists = jest.fn()

const data = {
  isLoggedIn: false,
  movies: [
    {
      average_rating: 6,
      backdrop_path: "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
      id: 528085,
      poster_path: "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
      release_date: "2020-10-01",
      title: "2067"
    }
  ],
  user: {email: "claire@turing.io", id: 86, name: "Claire"},
  userLists: {}
}

describe('MoviePage', () => {
   
    it("Should display the movie's backdrop", () => {
      render(<MoviePage userId={data.user.id} movieId={"528085"} updateUserRatings={updateUserRatings} user={data.user} isLoggedIn={data.isLoggedIn} theUpdater={theUpdater} updateUserLists={updateUserLists} userLists={data.userLists} userRatings={data.userRatings}></MoviePage>)

      let movieBackdrop = screen.getByRole('img', { name: /undefined backdrop/i })

      expect(movieBackdrop).toBeInTheDocument();
    })

    it("Should display the movie's poster", () => {
      render(<MoviePage userId={data.user.id} movieId={"528085"} updateUserRatings={updateUserRatings} user={data.user} isLoggedIn={data.isLoggedIn} theUpdater={theUpdater} updateUserLists={updateUserLists} userLists={data.userLists} userRatings={data.userRatings}></MoviePage>)

      let moviePoster = screen.getByRole('img', { name: /undefined poster/i })

      expect(moviePoster).toBeInTheDocument();
    })
})