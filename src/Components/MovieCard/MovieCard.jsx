import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }
  componentDidMount() {
    this.setState({movie: this.props.movie})
  }
  render() {
    return (
      <Link to={`/movies/${this.state.movie.id}`} style={divStyle}>
        <img src={this.state.movie.poster_path} alt="Movie Poster" style={imgStyle}/>
        <div style={bodyStyle}>
          <h4 style={titleStyle}>{this.props.movie.title}</h4>
        </div>
      </Link>
    )
  }
}

let divStyle = { 
  height: '500px',
  width: '282px',
  justifySelf: 'Center',
  alignSelf: 'center',
  marginBottom: '20px',
  boxShadow: '15px 20px 40px #888888',
  fontFamily: 'Permanent Marker, cursive',
  textDecoration: 'none',
}

let imgStyle = {
  height: '450px',
  width: '282px',
  cursor: 'pointer'
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

let titleStyle = {
  fontWeight: 'bold',
  gridColumn: '2',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'black',
}

export default MovieCard