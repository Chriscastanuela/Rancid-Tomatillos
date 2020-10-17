import React, { Component } from 'react'

export class MoviePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
