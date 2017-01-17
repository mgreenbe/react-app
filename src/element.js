const React = require('react');

from = (obj) => React.createElement(
  obj.type, obj.props, obj.children.map(
    (child) => (typeof child === 'string') ? child : from(child)
  )
)

module.exports.from = from;