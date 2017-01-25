import React from 'react';
import { connect } from 'react-redux';
import { updateContext } from './actions';

const mapStateToProps = state => ({
  contextStr: state.get('editor').get('contextStr'),
  parseSuccess: state.get('editor').get('parseSuccess')
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(updateContext(e))
});

export const ContextEditor = connect(mapStateToProps, mapDispatchToProps)(
  ({ contextStr, parseSuccess, handleChange }) => (
    <textarea
      spellCheck={false}
      style={{borderColor: (parseSuccess) ? 'green' : 'red', borderStyle: 'solid', borderWidth: 'medium'}}
      cols="60"
      rows="30"
      value={contextStr}
      onChange={handleChange}>
    </textarea>
  )
);