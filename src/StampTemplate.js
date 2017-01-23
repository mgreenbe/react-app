import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch({type: 'RENDER'})
});

const stamp = function(props) {
  
}