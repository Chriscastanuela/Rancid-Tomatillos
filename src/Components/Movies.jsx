import React, { Component } from 'react'
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
      <section className='MovieSection' style={{margin: 0, padding: 0}}>
        {this.state.loading || !this.state.allMovies ? (
        <h1 style={{fontFamily: 'Permanent Marker, cursive',}}>Loading</h1>
        ) : (
          <section className='MovieContainer' style={movieSectionStyle}>
            {this.state.allMovies.map((movie) => movie
            ).sort((a,b) => {
              return a.title.localeCompare(b.title)
          }).map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
          </section>
        )}
      </section>
    )
  }
}

let movieSectionStyle = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '5%',
  height: '600px',
  width: '420px',
  overflowY: 'scroll',
  marginLeft: '10px',
  marginRight: '10px',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '40',
  marginBottom: '20px',
  marginTop: '20px',
  boxShadow: '10px 15px 35px #888888',
  paddingTop: '20px',
  backgroundColor: '#F3EED9'
}