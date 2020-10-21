import React from 'react';
import List from './List';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

let recentMovies = [
  {
    average_rating: 5.166666666666667,
    backdrop_path: "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
    id: 528085,
    poster_path: "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    release_date: "2020-10-01",
    title: "2067",
  },
  {
    average_rating: 6,
    backdrop_path: "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
    id: 613504,
    poster_path: "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
    release_date: "2020-09-02",
    title: "After We Collided",
  },
  {
    average_rating: 4,
    backdrop_path: "https://image.tmdb.org/t/p/original//pGqBDYycGWsMYc57sYv5M9GAQoW.jpg",
    id: 627290,
    poster_path: "https://image.tmdb.org/t/p/original//irkse1FMm9dWemwlxKJ7RINT9Iy.jpg",
    release_date: "2020-09-02",
    title: "Antebellum",
  }
]


describe('List', () => {

    it('Should render a the movie title', () => {
      render(<List 
                isLoggedIn={true}
                header={'New Releases'} 
                list={recentMovies}
              />);

      expect(screen.getByText('After We Collided')).toBeInTheDocument();
      expect(screen.getByText('2067')).toBeInTheDocument();
      expect(screen.getByText('Antebellum')).toBeInTheDocument();
    })

    it('Should render average ratings', () => {
      render(<List 
                isLoggedIn={true}
                header={'New Releases'} 
                list={recentMovies}
              />);

      expect(screen.getByText('Rating: 🍅🍅🍅🍅🍅')).toBeInTheDocument();
      expect(screen.getByText('Rating: 🍅🍅🍅🍅🍅🍅')).toBeInTheDocument();
      expect(screen.getByText('Rating: 🍅🍅🍅🍅')).toBeInTheDocument();
    })

    it('Should render the `header` prop', () => {
      render(<List 
                isLoggedIn={true}
                header={'New Releases'} 
                list={recentMovies}
              />);

      expect(screen.getByText('New Releases')).toBeInTheDocument();
    })
})