// const htmlparser = require('htmlparser2');
import htmlparser from 'htmlparser2'

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

exports.parse = parse;
// console.log(parse(html));