import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class MovieCard extends Component {
  render() {
    return (
      <div>
      <Card style={{ width: '12rem', padding: 'auto', justifySelf: 'center'}}>
        <Card.Img variant="top" src={this.props.movie.poster_path} />
        <Card.Body>
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Subtitle>
            Average rating: {Math.floor(this.props.movie.average_rating)}/10
          </Card.Subtitle>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default MovieCard