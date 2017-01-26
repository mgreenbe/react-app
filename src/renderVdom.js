import dict from './dict.js';

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

const middleware = function(node) {
  if (node.type in dict) {
    return Object.assign(node, {type: dict[node.type]}
  } else {
    return node;
  }
}
