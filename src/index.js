import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { App } from './App.js';
import { context, source } from './data.js';
import { reducer as editorReducer } from './reducers.js';

const initialState = fromJS({editor: {source, context}, form: null});
const reducer = combineReducers({editor: editorReducer, form: formReducer});
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

