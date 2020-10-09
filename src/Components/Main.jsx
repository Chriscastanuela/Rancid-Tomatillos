import React, { Component } from 'react'
import Lists from './Lists';

export class Main extends Component {

  constructor() {
    super();
    this.state = {
      data: '',
      recentMovies: [],
      lowestRated: [],
      highestRated: [],
      movieData: {},
    };
  }

  componentDidMount() {
    Promise.all([
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => response.json())
        .then(response => this.setState({movieData: response}))
        .catch(err => alert('Data failed to load. Try again later', err))
    ])
    .then(promiseDotAllIndex => {
      console.log(this.state.movieData);
      this.getAList((
        this.state.movieData.movies.sort((a,b) => {
          return b.release_date - a.release_date;
        })
      ), this.recentMovies);
      this.getAList((
        this.state.movieData.movies.sort((a,b) => {
          return a.average_rating - b.average_rating;
        })
      ), this.lowestRated);
      this.getAList((
        this.state.movieData.movies.sort((a,b) => {
          return b.average_rating - a.average_rating;
        })
      ), this.highestRated)
    })
  }

  getAList(theList, theKey) {
    console.log('I exist, am I before or after?')
    let theTen = [];
    theList.forEach(index => {
      if (theTen.length < 10) {
        theTen.push(index);
      }
    })
    this.setState({theKey: theTen})
    console.log(this.state.theKey, 'asdfsafdfasfdafa')
  }

  render() {
    return (
      <section style={mainSectionStyle}>
        <Lists />
        {/* <SearchFormAndMoviePosters /> */}
      </section>
    )
  }
}

let mainSectionStyle = {
  display: 'grid',
  gridTemplateRows: '1fr 1fr'
}

export default Main
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