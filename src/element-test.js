import { outOf } from './element.js';
// ({from} = require('./element.js'));

let obj = {
  type: 'div',
  children: [
    {
      type: 'h2',
      props: {
        className: 'my-class',
        hidden: false,
      },
      children: [
        'This is a text element.'
      ]
    },
    'This is also a text element.'
  ]
};

let testElement = outOf(obj);
// console.log(JSON.stringify(elt, null, 2));

export {testElement};
// module.exports.myElement = elt;