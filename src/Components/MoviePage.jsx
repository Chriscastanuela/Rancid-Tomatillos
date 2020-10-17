import React, { Component } from 'react'

export class MoviePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
    .then(res => res.json())
    .then(res => this.setState({ movie: res.movie }))
    .then(res => console.log(this.state.movie))
  }
  

  render() {
    return (
      <div className="MoviePage">
        <div className='BackdropContainer'>
          <div className='BackdropDiv'>
            <img className="MovieBackdrop" src={this.state.movie.backdrop_path} alt={`${this.state.movie.title} backdrop`}/>
          </div>
        </div>
        <div className='MoviePosterContainer'>
          <div className='MoviePosterDiv'>
            <img className='MoviePoster' src={this.state.movie.poster_path} alt={`${this.state.movie.title} poster`}/>
          </div>
        </div>
        <div className='BigDetails'>
          <h2 className='MovieName'>{this.state.movie.title}</h2>
          <ul className='BigDetailsList'>
            <span className='BigDetailsSpan'>
              <h2 className='MovieName'>{this.state.movie.title}</h2>
              {/* <h4 style={{margin: 3}}>{i.title}</h4>
              <p style={{margin: 3}}>Release Date: {i.release_date}</p>
              <p style={{margin: 3}}>Rating: {theEmoji}</p><br/> */}
            </span>
          </ul>
        </div>
      </div>
    )
  }
}

export default MoviePage
