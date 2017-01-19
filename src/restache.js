const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Handlebars = require('handlebars');
const htmlparser = require('htmlparser2');

const myParser = function() {
  const handler = new htmlparser.DomHandler(function(err, dom) {
    if (err) {
      console.log('Parse failed.');
    } else {
      console.log('Parse successful.');
    }
  });
  return new htmlparser.Parser(handler);
}

const parse = function(html) {
  const parser = myParser();
  parser.write(html);
  parser.done();
  return parser._cbs.dom;
}

let source = `
<div id="hi" class="mom" data-stuff="data" custom="blah">
  <h1 class="title">Title</h1>
  {{name}} is {{age}} years old.
</div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, facilis vero culpa ipsam! Debitis animi sapiente ex provident aliquid, odio vitae consequuntur magnam fuga suscipit, sit hic voluptate laboriosam perspiciatis!</p>`;
let template = Handlebars.compile(source);
let context = {name: 'Max', age: 3};
let html = template(context);


console.log(parse(html));