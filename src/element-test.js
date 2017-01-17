({from} = require('./element.js'));

let obj = {
  type: 'h3',
  children: [
    {
      type: 'h4',
      props: {
        className: 'my-class',
        hidden: false
      },
      children: [
        'This is a text element.'
      ]
    },
    'This is also a text element.'
  ]
};

let elt = from(obj);
console.log(JSON.stringify(elt, null, 2));