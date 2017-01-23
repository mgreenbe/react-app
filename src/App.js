import React from 'react';
// import { compile } from 'handlebars';
import { Stamp } from './Stamp.js';
import { SourceEditor } from './SourceEditor.js';
import { ContextEditor } from './ContextEditor.js';

export class App extends React.Component {
  constructor(props) {
    super(props);
    const contextString = JSON.stringify(props.context, null, 2);
    this.state = {...props, contextString};
    this.handleChange = this.handleChange.bind(this);
    this.updateContext = this.updateContext.bind(this);
    // this.compileTemplate = this.compileTemplate.bind(this);
  }
  handleChange(e) {
    let update = {};
    update[e.target.id] = e.target.value;
    this.setState(update);
  }
  updateContext() {
    this.setState({context: JSON.parse(this.state.contextString)});
  }
  // compileTemplate() {
  //   this.setState({template: compile(this.state.source)})
  // }
  render() {
    return (
      <div id="app" onChange={this.handleChange}>
        <SourceEditor />
        <ContextEditor />
        <Stamp />
      </div>
    );
    // connect Stamp to store
  }
}

