import htmlparser from 'htmlparser2'
import { compile } from 'handlebars';
import { createElement } from 'react';
import { connect } from 'react-redux';

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

export const parse = function(html) {
  const parser = myParser();
  parser.write(html);
  parser.done();
  return parser._cbs.dom;
}


export const render = function(vdom) {
  // console.log(Object.keys(vdom));
  // console.log(`type: ${vdom.type}`);
  switch (vdom.type) {
    case 'text':
      // console.log(`text: ${vdom.data}`)
      return vdom.data;
    case 'tag':
      // console.log(`tag: ${vdom.name}, attribs: ${JSON.stringify(vdom.attribs)}`)
      return createElement(
        vdom.name, vdom.attribs || {}, 
        ...vdom.children.map(child => render(child))
      );
    default:
      console.log('default');
      console.log(JSON.stringify(vdom, null, 2));
  }
}

const mapStateToProps = state => ({
  source: state.get('source'),
  context: state.get('context')
})

export const Stamp = connect(mapStateToProps)(props =>
  render(parse(compile(props.source)(props.context))[0])
);

