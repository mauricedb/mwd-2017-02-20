import React from "react";
import ReactDOM from "react-dom";


class UpdateValue extends React.Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
  }

  _onChange(e) {

  }
  render() {
    return (
      <div>
        <input value={''} onChange={e => this._onChange(e)} />
      </div>
    );
  }
}

class DisplayValue extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>Message: {''}</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <UpdateValue />
        <DisplayValue />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
