import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends Component {
  constructor(){
    super();
    this.state = {
      page: 0
    }
    this.gotoPage = this.gotoPage.bind(this);  
  }

  gotoPage(page){
    this.setState({page});
  }

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
        <a href="#" onClick={() => this.gotoPage(1)}>Page 1</a>
        &nbsp;
        <a href="#" onClick={() => this.gotoPage(2)}>Page 2</a>

        { this.state.page === 1 ? <Page1 />: null}
        { this.state.page === 2 ? <Page2 />: null}
      </div>
    );
  }
}

export default App;
