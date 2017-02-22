import React from "react";
import ReactDOM from "react-dom";

function updateValue(value){
  return {
    type:  'update-value',
    payload: value
  }
}

var listeners = [];

var store = {
  value: 12
}

function dispatcher(action){
  switch (action.type) {
    case 'update-value':
      store.value = action.payload;

  }

  listeners.forEach(l => l.forceUpdate());
  console.log(store)
}


class UpdateValue extends React.Component {
  constructor() {
    super();
    listeners.push(this)
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    dispatcher(updateValue(e.target.value))
  }
  render() {
    return (
      <div>
        <input value={store.value} onChange={e => this.onChange(e)} />
      </div>
    );
  }
}

class DisplayValue extends React.Component {
  constructor() {
    super();
    listeners.push(this)

  }

  render() {
    return (
      <div>Value: {store.value}</div>
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
