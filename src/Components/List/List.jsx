import React, { Component } from 'react';

export default function List(props) {
    if (!props.isLoggedIn && props.header == 'Your Ratings') {
        return (
            <div style={divStyle}>
                <h2 style={headerStyle}>{props.header}</h2>
                <p>Log in if you would like to see your ratings</p>
            </div>
        )
    } else {
        return (
            <div style={divStyle}>
                <h2 style={headerStyle}>{props.header}</h2>
                <ul style={listStyle}>
                    {props.list.map(i => {
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
                        theEmoji = theEmojis[Math.floor(i.average_rating)]
                        return  (
                            <span style={spanStyle}>
                                <h4 style={{margin: 3}}>{i.title}</h4>
                                <p style={{margin: 3}}>Release Date: {i.release_date}</p>
                                <p style={{margin: 3}}>Rating: {theEmoji}</p><br/>
                            </span>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

let divStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5%',
    height: '260px',
    width: '420px',
    overflowY: 'scroll',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '40',
    marginBottom: '20px',
    marginTop: '20px',
    boxShadow: '10px 15px 35px #888888',
    paddingBottom: '20px',
    backgroundColor: '#F3EED9'
}

let headerStyle = {
    margin: 5,
    justifySelf: 'center',
    alignSelf: 'center',
    fontFamily: 'Open Sans, sans-serif',
    gridColumn: 1,
    gridRow: 1
}

const spanStyle = {
    margin: 0,
    textAlign: 'left',
}

let listStyle = {
    margin: 0,
    padding: 0,
    gridColumn: 1,
    gridRow: 2,
    marginLeft: '10px'
}