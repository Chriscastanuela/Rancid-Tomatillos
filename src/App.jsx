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
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path='/' render={props => (
          <React.Fragment>
            <Main user={this.state.user}/>
          </React.Fragment>
        )} />
        <Route path='/login' component={Login}/>
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App