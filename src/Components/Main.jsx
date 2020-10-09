import React, { Component } from 'react'

export class Main extends Component {

  constructor() {
    super();
    this.state = {
      data: '',
      latestMovies: [],
      lowestRated: [],
      highestRated: [],
      movieData: {}
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
      this.getRecentMovies();
      this.getLowestRated();
      this.getHighestRated();
    })
  }

  getRecentMovies() {
    console.log('I exist, am I before or after?')
    let lastTen = [];
    this.state.movieData.movies.sort((a,b) => {
      return b.release_date - a.release_date;
    }).forEach(index => {
      if (lastTen && lastTen.length < 10) {
        lastTen.push(index);
      }
    })
    this.setState({latestMovies: lastTen})
    console.log(this.state.latestMovies)
  }

  getLowestRated() {
    let bottomTen = [];
    this.state.movieData.movies.sort((a,b) => {
      return a.average_rating - b.average_rating;
    }).forEach(index => {
    if (bottomTen.length < 10) {
      bottomTen.push(index);
    }
    });
    this.setState({lowestRated: bottomTen});
    console.log(this.state.lowestRated);
  }

    getHighestRated() {
      let topTen = [];
      this.state.movieData.movies.sort((a,b) => {
        return b.average_rating - a.average_rating;
      }).forEach(index => {
        if (topTen.length < 10) {
          topTen.push(index);
        }
      });
      this.setState({highestRated: topTen});
      console.log(this.state.highestRated);
    }

  render() {
    return (
      <section>
        <p>Let's check the console</p>
      </section>
    )
  }
}


export default Main