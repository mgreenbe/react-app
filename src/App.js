import React from 'react';
import { Stamp } from './Stamp.js';
import { SourceEditor } from './SourceEditor.js';
import { ContextEditor } from './ContextEditor.js';

export const App = () => React.createElement(
  'div',
  null,
  React.createElement(SourceEditor),
  React.createElement(ContextEditor),
  React.createElement(Stamp)
);