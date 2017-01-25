import React from 'react';
import { connect } from 'react-redux';
import { updateSource } from './actions';

const mapStateToProps = state => ({
  source: state.get('editor').get('source')
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(updateSource(e))
});

export const SourceEditor = connect(mapStateToProps, mapDispatchToProps)(
  props => {
    return (
      <textarea id="source"
        spellCheck={false}
        cols="60"
        rows="30"
        value={props.source}
        onChange={props.handleChange}>
      </textarea>
    )
  }
);