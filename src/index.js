import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './App.js';
import { context, source } from './data.js';
import { reducer } from './reducers.js';

const initialState = Map({source, context});
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

