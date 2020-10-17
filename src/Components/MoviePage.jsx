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
      <div>
        <h1>{this.props.movieId}</h1>
      </div>
    )
  }
}

export default MoviePage
