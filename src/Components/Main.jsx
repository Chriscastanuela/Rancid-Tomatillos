import React, { Component } from 'react'
import ListSection from './ListSection';
import Movies from './Movies.jsx'

export default function Main(props) {
  return (
    <section className='MainSection' >
      <h1 className='CategoriesH'>Categories</h1>
      <ListSection user={props.user} isLoggedIn={props.isLoggedIn} theUpdater={props.theUpdater} updateUserLists={props.updateUserLists} userLists={props.userLists} userRatings={props.userRatings}/>
      <h1 className='PostersH'>Movie Details</h1>
      <Movies />
    </section>
  )
}


// getRecentMovies() {
  //   let lastTen = [];
  //   this.state.movieData.movies.sort((a,b) => {
  //     return b.release_date - a.release_date;
  //   }).forEach(index => {
  //     if (lastTen && lastTen.length < 10) {
  //       lastTen.push(index);
  //     }
  //   })
  //   this.setState({latestMovies: lastTen})
  // }
  // getLowestRated() {
  //   let bottomTen = [];
  //   .forEach(index => {
  //   if (bottomTen.length < 10) {
  //     bottomTen.push(index);
  //   }
  //   });
  //   this.setState({: bottomTen});
  // }