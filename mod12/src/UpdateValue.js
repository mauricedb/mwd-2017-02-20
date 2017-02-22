import React, { Component } from 'react';

class UpdateValue extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {

  }

  render() {
    return (
      <div>
        <input value={123} onChange={e => this.onChange(e)} />
      </div>
    );
  }
}

export default UpdateValue;