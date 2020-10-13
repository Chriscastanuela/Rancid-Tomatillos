import React, { Component } from 'react'
// import { Container, CardDeck } from 'react-bootstrap'
import MovieCard from './MovieCard.jsx'

export default class Movies extends Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => this.setState({allMovies: data.movies, loading: false}))
      .catch(err => alert("WOAH, MOVIES FAILED TO LOAD!!!!!"))
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.allMovies ? (
        <h1 style={{fontFamily: 'Permanent Marker, cursive',}}>Loading</h1>
        ) : (
          <section>
            {this.state.allMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>
            ))}
          </section>
        )}
      </div>
    )
  }
}