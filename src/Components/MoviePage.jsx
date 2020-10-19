import React, { Component } from 'react'

export class MoviePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
    }
  }

  componentDidMount() {
    console.log(this.props)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
    .then(res => res.json())
    .then(res => this.setState({ movie: res.movie }))
  }

  formUpdate(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  sendRating() {
    let thePost = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 
          movie_id: this.state.movie.id, 
          rating: parseInt(this.state['submit-rating']),
        }
      )
    }
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.userId}/ratings`, thePost)
      .then(res =>  console.log(res))  
      .then(res => res.json())
      .then(res =>  console.log(res))  
      .catch(err => console.log(err));
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.userId}/ratings`)
      .then(response => response.json())
      .then(res => this.props.updateUserRatings([...res.ratings]))
  }

  render() {
    let theEmoji = null;
    let theEmojis = {
        1: '🍅',
        2: '🍅🍅',
        3: '🍅🍅🍅',
        4: '🍅🍅🍅🍅',
        5: '🍅🍅🍅🍅🍅',
        6: '🍅🍅🍅🍅🍅🍅',
        7: '🍅🍅🍅🍅🍅🍅🍅',
        8: '🍅🍅🍅🍅🍅🍅🍅🍅',
        9: '🍅🍅🍅🍅🍅🍅🍅🍅🍅',
        10: '🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅',
    }
    theEmoji = theEmojis[Math.floor(this.state.movie['average_rating'])]
    let theGenresString;
    if (this.state.movie.genres) {
      theGenresString = this.state.movie.genres.reduce((acc, i) => {
        acc += `${ i }, `;
        return acc;
      }, '')
    }

    
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
              <p style={{margin: 3}}>Tagline: {this.state.movie.tagline}</p>
              <p style={{margin: 3}}>Rating: {theEmoji}</p>
              <p style={{margin: 3}}>Overview: {this.state.movie.overview}</p><br/>
                <span style={{float: 'left'}}>
                  <label autocomplete="off" for="submit-rating">Rate this movie: </label>
                  <input onChange={(e) => this.formUpdate(e)} type="number" id="submit-rating" name="submit-rating" min="1" max="10"/>
                  <input onClick={() => this.sendRating()} type="submit" style={{cursor: 'pointer'}}/>
                </span>
            </span>
          </ul>
        </div>
        <div className='SmallDetails'>
          <ul className='SmallDetailsList'>
              <span className='SmallDetailsSpan'>
                <p style={{margin: 3}}>Release Date: {this.state.movie.release_date}</p>
                <p style={{margin: 3}}>Runtime: {this.state.movie.runtime} minutes</p>
                <p style={{margin: 3}}>Genres: {theGenresString}</p>
                <p style={{margin: 3}}>Budget: ${this.state.movie.budget}</p>
                <p style={{margin: 3}}>Revenue: ${this.state.movie.revenue}</p>
              </span>
          </ul>
        </div>
      </div>
    )
  }
}

export default MoviePage