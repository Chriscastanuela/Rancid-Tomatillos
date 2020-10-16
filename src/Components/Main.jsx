import React, { Component } from 'react'
import ListSection from './ListSection';
import Movies from './Movies.jsx'

export default function Main(props) {
  return (
    <section className='MainSection' >
      <h1 className='CategoriesH'>Categories</h1>
      <ListSection user={props.user} isLoggedIn={props.isLoggedIn} user={props.user}/>
      <h1 className='PostersH'>Movie Pages</h1>
      <Movies />
    </section>
  )
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