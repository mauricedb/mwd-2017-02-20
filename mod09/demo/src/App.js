import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Hello extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React in London</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello />
      </div>
    );
  }
}

export default App;
