import React from 'react';
//import { Stamp } from './Stamp.js';
import Preview from './xmlToReact.js';
import { SourceEditor } from './SourceEditor.js';
import { ContextEditor } from './ContextEditor.js';

const App = () => React.createElement(
  'div',
  null,
  React.createElement(SourceEditor),
  React.createElement(ContextEditor),
  React.createElement(Preview)
  // React.createElement(Stamp)
);

export default App;
