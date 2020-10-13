import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class MovieCard extends Component {
  render() {
    return (
      // <Card style={{ width: '12rem', padding: 'auto', justifySelf: 'center', marginBottom: '20px', marginTop: '20px'}}>
      //   <Card.Img variant="top" src={this.props.movie.poster_path} />
      //   <Card.Body style={bodyStyle}>
      //     <Card.Title>{this.props.movie.title}</Card.Title>
      //     <Card.Subtitle>
      //       Average rating: {Math.floor(this.props.movie.average_rating)}/10
      //     </Card.Subtitle>
      //   </Card.Body>
      // </Card>
      <div style={divStyle}>
        <img src={this.props.movie.poster_path} alt="Movie Poster" style={imgStyle}/>
      </div>
    )
  }
}

let divStyle = { 
  width: '282px',
  padding: 'auto',
  marginBottom: '20px',
  marginTop: '20px',
  justifySelf: 'Center'
}

let imgStyle = {
  height: '450px',
  width: '282px',
}

const bodyStyle = {
  overflowX: 'scroll',
  overflowY: 'hidden',
  maxHeight: '91px',
  whiteSpace: 'nowrap',
}

export default MovieCard