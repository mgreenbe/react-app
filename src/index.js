import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { compile } from 'handlebars';
import { Stamp } from './stamp.js';
import { context, source } from './data.js';

let template = compile(source);
let elt = <Stamp template={template} context={context} />

ReactDOM.render(
  elt,
  document.getElementById('root')
);
