import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Cats from './Cats';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Maurice" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <Cats />
      </div>
    );
  }
}

export default App;
