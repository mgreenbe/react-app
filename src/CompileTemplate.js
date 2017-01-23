import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch({type: 'COMPILE_TEMPLATE'})
});

export const CompileTemplate = connect(null, mapDispatchToProps)(
  props => (
    <button onClick={props.handleClick}>Compile</button>
  )
);