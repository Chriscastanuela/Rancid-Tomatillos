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
  height: '450px',
  width: '282px',
  justifySelf: 'Center',
  alignSelf: 'center',
  marginBottom: '20px',
  boxShadow: '15px 20px 40px #888888',
}

let imgStyle = {
  height: '450px',
  width: '282px',
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