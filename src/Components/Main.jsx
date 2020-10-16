import React, { Component } from 'react'
import ListSection from './ListSection';
import Movies from './Movies.jsx'

export default function Main(props) {
  return (
    <section style={mainSectionStyle}>
      <h1 style={{fontFamily: 'Permanent Marker, cursive', margin: 0}}>Categories</h1>
      <ListSection isLoggedIn={props.isLoggedIn} user={props.user}/>
      <h1 style={{fontFamily: 'Permanent Marker, cursive', margin: 0}}>Movie Pages</h1>
      <Movies />
    </section>
  )
}

let mainSectionStyle = {
  display: 'grid',
  gridTemplateRows: '1fr',
  gridGap: '10px',
  alignContent: 'center',
  justifyContent: 'center',
}

// getRecentMovies() {
  //   console.log('I exist, am I before or after?')
  //   let lastTen = [];
  //   this.state.movieData.movies.sort((a,b) => {
  //     return b.release_date - a.release_date;
  //   }).forEach(index => {
  //     if (lastTen && lastTen.length < 10) {
  //       lastTen.push(index);
  //     }
  //   })
  //   this.setState({latestMovies: lastTen})
  //   console.log(this.state.latestMovies)
  // }
  // getLowestRated() {
  //   let bottomTen = [];
  //   .forEach(index => {
  //   if (bottomTen.length < 10) {
  //     bottomTen.push(index);
  //   }
  //   });
  //   this.setState({: bottomTen});
  //   console.log(this.state.lowestRated);
  // }