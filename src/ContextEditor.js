import React from 'react';
import { connect } from 'react-redux';
import { updateContext } from './actions';

const mapStateToProps = state => ({
  context: state.get('context')
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(updateContext(e))
});

export const ContextEditor = connect(mapStateToProps, mapDispatchToProps)(
  props => (
    <textarea id="context"
      data-key="context"
      spellCheck={false}
      cols="60"
      rows="30"
      value={JSON.stringify(props.context, null, 2)}
      onChange={props.handleChange}>
    </textarea>
  )
);