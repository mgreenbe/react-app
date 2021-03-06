import {compile} from 'handlebars';

let parser = new DOMParser();

const nodeTypes = {
  1: 'ELEMENT_NODE',
  2: 'ATTRIBUTE_NODE',
  3: 'TEXT_NODE',
  4: 'CDATA_SECTION_NODE',
  5: 'ENTITY_REFERENCE_NODE',
  6: 'ENTITY_NODE',
  7: 'PROCESSING_INSTRUCTION_NODE',
  8: 'COMMENT_NODE',
  9: 'DOCUMENT_NODE',
  10: 'DOCUMENT_TYPE_NODE',
  11: 'DOCUMENT_FRAGMENT_NODE',
  12: 'NOTATION_NODE',
}

class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ParseError';
  }
}

const nodeListToArray = function(nodeList) {
  try {
    if (!(nodeList instanceof NodeList)) {
      throw new TypeError('Expecting instance of NodeList.');
    }
  }
  catch(e) {
    console.error(e);
  }
  const arr = [];
  nodeList.forEach(x => arr.push(x));
  return arr;
}


const isWhitespace = node =>
  !(nodeTypes[node.nodeType] == 'TEXT_NODE' && node.textContent.trim() == '')


const xml2json = function(node) {

  if (arguments.length == 0) {
    throw new TypeError('Not enough arguments. You must pass a DOM node.');
  } 
  else if (!(node instanceof Element.__proto__)) {
    throw new TypeError('Argument must be a DOM node.');
  }

  switch (nodeTypes[node.nodeType]) {
    case ('ELEMENT_NODE'):
      // try {
      if (node.nodeName == 'parsererror') {
        const childNodesArray = nodeListToArray(node.childNodes);
        const message = childNodesArray.filter(isWhitespace).map(node => node.textContent).join('\n');
        throw new ParseError(message);
      }
      const obj = {type: node.nodeName};
      if (node.attributes.length > 0) {
        const props = {};
        let attr;
        for (i = 0; i < node.attributes.length; i++) {
          attr = node.attributes.item(i);
          props[attr.name] = attr.value;
        }
        obj.props = props;
      }
      obj.children = nodeListToArray(node.childNodes).filter(isWhitespace).map(child => xml2json(child))
      return obj;
    case ('DOCUMENT_NODE'):
      return {
        type: node.nodeName,
        children: nodeListToArray(node.childNodes).filter(isWhitespace).map(child => xml2json(child))
      }
    case ('TEXT_NODE'):
      return node.textContent.trim();
    default:
  }
}


// const createElement = (type, props, ...children) =>
//   [type, props || {}, [...children]];


const render = function(node) {
  switch (typeof node) {
    case 'object':
      return React.createElement(
        node.type, node.props || {},
        ...node.children.map(child => render(child))
      );
    case 'string':
      return node;
    default:
      console.log('default');
  }
}
  

export const Stamp = connect(mapStateToProps)(
  ({ source, context }) => {
    const str = compile(source)(context);
    const dom = parser.parseFromString(str, 'text/xml');
    return render(xml2json(dom));
  }
);
