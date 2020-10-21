import React from 'react';
import MovieCard from './MovieCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

describe('MovieCard', () => {
   let movie = {
    average_rating: 6,
    backdrop_path: "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
    id: 528085,
    poster_path: "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    release_date: "2020-10-01",
    title: "2067"
  }
    it('Should work', () => {
      render(<Router><MovieCard movie={movie}/></Router>)
      expect(screen.getByText('2067').toBeInTheDocument)
    })
})