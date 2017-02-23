import React, { Component } from 'react';
import {connect} from 'react-redux';

class UpdateValue extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.updateValue(e.target.value)
  }

  render() {
    return (
      <div>
        <input value={this.props.value} onChange={this.onChange} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    value: state.value
  }
}

function mapDispatchToProps(dispatch){

  return {
    updateValue: function(value){
      dispatch({type: 'update-value', payload: value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateValue);
