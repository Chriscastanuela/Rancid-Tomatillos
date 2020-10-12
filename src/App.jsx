import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' render={props => (
          <React.Fragment>
            <Main />
            <Footer />
          </React.Fragment>
        )} />
      </div>
    </Router>
  );
}

export default App;