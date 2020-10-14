import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class MovieCard extends Component {
  render() {
    return (
      // <Card style={{ width: '12rem', padding: 'auto', justifySelf: 'center', marginBottom: '20px', marginTop: '20px'}}>

      //   <Card.Body style={bodyStyle}>
      //     <Card.Title>{this.props.movie.title}</Card.Title>
      //     <Card.Subtitle>
      //       Average rating: {Math.floor(this.props.movie.average_rating)}/10
      //     </Card.Subtitle>
      //   </Card.Body>
      // </Card>
      <div style={divStyle}>
        <img src={this.props.movie.poster_path} alt="Movie Poster" style={imgStyle}/>
        <div style={bodyStyle}>
          <p>{this.props.movie.title}</p>
        </div>
      </div>
    )
  }
}

let divStyle = { 
  height: '500px',
  width: '350px',
  justifySelf: 'Center',
  alignSelf: 'center',
}

let imgStyle = {
  height: '450px',
  width: '282px',
  margin: 0,
}

const bodyStyle = {
  overflowX: 'scroll',
  overflowY: 'hidden',
  maxHeight: '91px',
  width: '282px',
  whiteSpace: 'nowrap',
  margin: 0,
  justifySelf: 'center',
  alignSelf: 'center',
}

export default MovieCard