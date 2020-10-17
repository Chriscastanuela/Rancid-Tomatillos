import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Login from './Components/Login';
import MoviePage from './Components/MoviePage';

import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isLoggedIn: false,
      movies: null,
    }
  }
  theUpdater = (state, newState) => {
    this.setState({[state]: newState});
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} theUpdater={this.theUpdater}/>
        <Route exact path='/' render={props => (
          <React.Fragment>
            <Main user={this.state.user} isLoggedIn={this.state.isLoggedIn} theUpdater={this.theUpdater}/>
          </React.Fragment>
        )} />
        <Route path='/login' render={props => (
          <Login theUpdater={this.theUpdater} isLoggedIn={this.state.isLoggedIn}/>
        )
        }/>
        <Route exact path='/movies/:id'
        render={({match}) => {
          const { id } = match.params;
          const movies = this.state.movies;
          return <MoviePage movieId={id}></MoviePage>
          // const creatureToRender = puppies.find(creature => creature.id === parseInt(id));
        }
        }
        />
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App