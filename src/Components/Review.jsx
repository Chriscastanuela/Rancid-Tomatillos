import React from 'react'

export default function Review(props) {
  console.log(props)
  if (props) {
    return (
      <div >
      <ul style={listStyle}>
          {props.reviews.map(i => {
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
              theEmoji = theEmojis[Math.floor(i.rating)]
              return  (
                  <span style={spanStyle}>
                      <h4 style={{margin: 3}}>T</h4>
                      <p style={{margin: 3}}>R</p>
              <p style={{margin: 3}}>Rating: {theEmoji}</p><br/>
                  </span>
              )
              })}
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