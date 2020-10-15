import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Login from './Components/Login';

import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isLoggedIn: false
    }
  }
  theUpdater = (state, newState) => {
    this.setState({[state]: newState});
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path='/' render={props => (
          <React.Fragment>
            <Main user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
          </React.Fragment>
        )} />
        <Route path='/login' render={props => (
          <Login theUpdater={this.theUpdater} isLoggedIn={this.state.isLoggedIn}/>
        )
        }/>
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App