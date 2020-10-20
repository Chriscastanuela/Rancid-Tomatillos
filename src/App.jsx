import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './css/App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components//Main/Main';
import Login from './Components/Login/Login';
import MoviePage from './Components/MoviePage/MoviePage';

import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isLoggedIn: false,
      movies: null,
      userLists: {},
      userRatings: [],
    }
  }
  theUpdater = (state, newState) => {
    this.setState({[state]: newState});
  }
  updateUserLists = (newState) => {
    this.setState({userLists: newState});
    console.log(this.state.userLists);
  }
  updateUserRatings = (newState) => {
    this.setState({userRatings: newState});
    console.log(this.state.userLists);
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} theUpdater={this.theUpdater}/>
        <Route exact path='/' render={props => (
          <React.Fragment>
            <Main user={this.state.user} isLoggedIn={this.state.isLoggedIn} theUpdater={this.theUpdater} updateUserLists={this.updateUserLists} userLists={this.state.userLists} userRatings={this.state.userRatings}/>
          </React.Fragment>
        )} />
        <Route path='/login' render={props => (
          <Login theUpdater={this.theUpdater} isLoggedIn={this.state.isLoggedIn}/>
        )
        }/>
        <Route exact path='/movies/:id'
          render={({match}) => {
            const { id } = match.params;
            return <MoviePage userId={this.state.user.id} movieId={id} updateUserRatings={this.updateUserRatings} user={this.state.user} isLoggedIn={this.state.isLoggedIn} theUpdater={this.theUpdater} updateUserLists={this.updateUserLists} userLists={this.state.userLists} userRatings={this.state.userRatings}></MoviePage>
          }}
        />
        <Switch>
          <Redirect to='/'/>
        </Switch>
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App