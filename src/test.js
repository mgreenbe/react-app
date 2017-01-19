// const React = require('react');
// const { compile } = require('handlebars');
// const { parse } = require('./parse.js');
// const { render } = require('./render.js');
// const { renderToStaticMarkup } = require('react-dom/server');

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { compile } from 'handlebars';
import { parse } from './parse.js';
import { render } from './render.js';

export const context = {
  name: 'Max',
  age: 3
};

let source = `<section>
  <div id="hi" class="mom" data-stuff="data" custom="blah">
    <h1 class="title">Title</h1>
    {{name}} is {{age}} years old.
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, facilis vero culpa ipsam! Debitis animi sapiente ex provident aliquid, odio vitae consequuntur magnam fuga suscipit, sit hic voluptate laboriosam perspiciatis!</p>
</section>`;
let template = compile(source);
// let html = template(context);
// let vdom = parse(html);

const Stamp = (template, context) => render(parse(template(context))[0]);

let elt = Stamp(template, context);
let markup = renderToStaticMarkup(elt)
console.log(markup);
console.log(`\nValid react element? ${React.isValidElement(elt)}`);