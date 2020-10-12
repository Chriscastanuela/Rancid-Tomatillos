import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' render={props => (
          <React.Fragment>
            <Main />
            <Footer />
          </React.Fragment>
        )} />
        <Route path='/login' component={Login}/>
      </div>
    </Router>
  );
}

export default App;