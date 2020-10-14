import React, { Component } from 'react'

export class MovieCard extends Component {
  render() {
    return (
      <div style={divStyle}>
        <img src={this.props.movie.poster_path} alt="Movie Poster" style={imgStyle}/>
        <div style={bodyStyle}>
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
  margin: 0
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