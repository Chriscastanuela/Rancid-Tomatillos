import React, { Component } from 'react'
import { Container, CardDeck } from 'react-bootstrap'
import MovieCard from './MovieCard.jsx'

export default class Movies extends Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    const url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({allMovies: data.movies, loading: false});
    console.log(this.state.allMovies);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.allMovies ? (
        <h1>loading, yo...</h1>
        ) : (
          <CardDeck style={{justifyContent: 'center'}}>
            {this.state.allMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>
            ))}
          </CardDeck>
        )}
      </div>
    )
  }
}