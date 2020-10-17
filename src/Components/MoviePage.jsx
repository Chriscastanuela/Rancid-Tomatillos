import React, { Component } from 'react'

export class MoviePage extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  

  render() {
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
      </div>
    )
  }
}

export default MoviePage
