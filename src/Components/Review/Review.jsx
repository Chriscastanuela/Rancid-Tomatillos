import React, { Component } from 'react'

export default class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ratings: []
    }
  }

  componentDidMount() {
    if (this.props.user) {
      Promise.all([
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.user.id}/ratings`)
          .then(response => response.json())
          .then(res => this.setState({ratings: res.ratings}))
      ])
    }
  }

  updateRatings (movieId) {
    
    let newRatings = this.state.ratings.filter(i => {
      console.log("Review -> updateRatings -> i.id", movieId)
      console.log("Review -> updateRatings -> i.id", i.id)
      return i.movie_id != movieId
    })
    this.setState({ ratings: newRatings })
  }

  deleteRating(id) {
    let theMovieRating = this.state.ratings.find(index => {
      return id == index.movie_id
    })

    let thePost = {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
    }
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.user.id}/ratings/${theMovieRating.id}`, thePost)
      .then(res => console.log(res));
    this.updateRatings(id)
  }

  render() {
    if (this.state.ratings) {
      return (
        <div >
          <ul style={listStyle}>
            {
              this.state.ratings.map(i => {
                let theEmoji = null;
                let theSecondEmoji = null;

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

                theEmoji = theEmojis[Math.floor(i.rating)];

                if (this.props.userLists.all) {
                  var theMovie = this.props.userLists.all.find(index => {
                    return i.movie_id == index.id
                  })
                } else {
                  var theMovie = this.props.all.find(index => {
                    return i.movie_id == index.id
                  })
                }

                theSecondEmoji = theEmojis[Math.floor(theMovie.average_rating)]

                console.log(this.state.ratings)

                return  (
                  <span style={spanStyle}>
                    <h4 style={{margin: 3}}>{theMovie.title}</h4>
                    <p style={{margin: 3}}>Release Date: {theMovie.release_date}</p>
                    <p style={{margin: 3}}>Average Rating: {theSecondEmoji}</p>
                    <p style={{margin: 3}}>Your Rating: {theEmoji}</p>
                    <button style={{float: 'left', margin: 3, cursor: 'pointer'}} onClick={() => this.deleteRating(i.movie_id)}>Delete Rating</button><br/><br/>
                  </span>
                )

              })
            }
          </ul>
        </div>
      )
    } else {
      return (
        <p>You do not have any ratings at this time</p>
      )
    }
  }
}

let listStyle = {
  margin: 0,
  padding: 0,
  gridColumn: 1,
  gridRow: 2,
  marginLeft: '10px'
}

const spanStyle = {
  margin: 0,
  textAlign: 'left',
}