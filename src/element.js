// const React = require('react');
import React from 'react';


const outOf = (obj) => React.createElement(
  obj.type, obj.props, ...obj.children.map(
    (child) => (typeof child === 'string') ? child : outOf(child)
  )
)

export {outOf};
// module.exports.from = from;