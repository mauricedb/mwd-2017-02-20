import React, { Component } from 'react';
import {connect} from 'react-redux';

class DisplayValue extends Component {
  render() {
    return (
      <div>The value is : {this.props.value}</div>
    );
  }
}

function mapStateToProps(state){
  return {
    value: state.value
  }
}

export default connect(mapStateToProps)(DisplayValue);