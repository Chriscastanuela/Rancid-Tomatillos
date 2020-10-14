import React, { Component } from 'react'
import ListSection from './ListSection';
import Movies from './Movies.jsx'

export default function Main() {
  return (
    <section style={mainSectionStyle}>
      <ListSection />
      {/* <Movies /> */}
    </section>
  )
}

let mainSectionStyle = {
  display: 'grid',
  gridTemplateRows: '1fr',
  gridGap: '20px',
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