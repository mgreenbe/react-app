// const React = require('react');
import { createElement } from 'react';

const render = function(vdom) {
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

exports.render = render;