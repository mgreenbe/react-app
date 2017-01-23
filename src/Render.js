import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch({type: 'RENDER'})
});

export const CompileTemplate = connect(null, mapDispatchToProps)(
  props => (
    <button onClick={props.handleClick}>Stamp</button>
  )
);