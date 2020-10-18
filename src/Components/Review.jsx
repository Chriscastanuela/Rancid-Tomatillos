import React from 'react'

export default function Review(props) {
  console.log(props)
  if (props) {
    return (
      <div >
        <ul style={listStyle}>
          {props.reviews.map(i => {
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
            theEmoji = theEmojis[Math.floor(i.rating)]
            let theMovie = props.all.find(index => {
              return i.movie_id == index.id
            })
            theSecondEmoji = theEmojis[Math.floor(theMovie.average_rating)]
            console.log(theMovie);
            return  (
              <span style={spanStyle}>
                <h4 style={{margin: 3}}>Title: {theMovie.title}</h4>
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
    return (
      <p>You do not have any ratings at this time</p>
    )
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