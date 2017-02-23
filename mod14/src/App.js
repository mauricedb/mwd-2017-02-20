import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import {Route, Link} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/page1">Page 1</Link>
        &nbsp;
        <Link to="/page2">Page 2</Link>

        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    );
  }
}

export default App;
