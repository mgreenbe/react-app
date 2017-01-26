import React from 'react';
import { connect } from 'react-redux';
import { updateSource, updateEditors } from './actions';

const mapStateToProps = state => ({
  source: state.get('editor').get('source'),
  compileSuccess: state.get('editor').get('source')
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(updateEditors(e))
});

export const SourceEditor = connect(mapStateToProps, mapDispatchToProps)(
  ({ source, compileSuccess, handleChange }) => {
    return (
      <textarea id="source"
        spellCheck={false}
        style={{borderColor: (compileSuccess) ? 'green' : 'red', borderStyle: 'solid', borderWidth: 'medium'}}
        cols="60"
        rows="30"
        value={source}
        onChange={handleChange}>
      </textarea>
    )
  }
);