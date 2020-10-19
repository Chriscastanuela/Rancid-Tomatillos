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

  render() {
    // if (this.props.user) {
    //   Promise.all([
    //     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.user.id}/ratings`)
    //       .then(response => response.json())
    //       .then(res => this.setState({ratings: res.ratings}))
    //   ])
      // .then(i => {
        // console.log(i)
      // })
    // }
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

                console.log(theMovie)

                theSecondEmoji = theEmojis[Math.floor(theMovie.average_rating)]

                return  (
                  <span style={spanStyle}>
                    <h4 style={{margin: 3}}>{theMovie.title}</h4>
                    <p style={{margin: 3}}>Release Date: {theMovie.release_date}</p>
                    <p style={{margin: 3}}>Average Rating: {theSecondEmoji}</p>
                    <p style={{margin: 3}}>Your Rating: {theEmoji}</p><br/>
                  </span>
                )

              })
            }
          </ul>
        </div>
      )
    } else {
      console.log(this.props)
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