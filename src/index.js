import React from 'react';
import ReactDOM from 'react-dom';
import { compile } from 'handlebars';
import { Stamp } from './stamp.js';
import { context, source } from './data.js';

let template = compile(source);
// let stamp = <Stamp template={template} context={context} />;

// let log = x => console.log(x.target, x.target.value);

// let elt = <div onChange={log} onClick={log}>{stamp}<input name="my-input"/><button>Click!</button></div>;

// const appElt = <div id="app">
//   <textarea cols="60" rows="30" defaultValue={source}></textarea>
//   <button>Compile</button>
//   <textarea cols="60" rows="30" defaultValue={JSON.stringify(context, null, 2)}></textarea>
//   <button>Render</button>
//   {stamp}
// </div>;

class App extends React.Component {
  constructor(props) {
    super(props);
    const contextString = JSON.stringify(props.context, null, 2);
    this.state = {...props, contextString};
    console.log(JSON.stringify(this.state, null, 2));
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateContext = this.updateContext.bind(this);
    this.compileTemplate = this.compileTemplate.bind(this);
  }
  handleClick(e) {
    switch (e.target.id) {
      case 'context':
        this.setState({context: JSON.parse(this.state.contextString)});
        break;
      default:
        console.log(e.target.type, e.target.id);
    }
  }
  handleChange(e) {
    let update = {};
    update[e.target.id] = e.target.value;
    this.setState(update);
  }
  updateContext() {
    this.setState({context: JSON.parse(this.state.contextString)});
  }
  compileTemplate() {
    this.setState({template: compile(this.state.source)})
  }
  render() {
    return (<div id="app" onChange={this.handleChange}>
  <textarea id="source" spellCheck={false} cols="60" rows="30" defaultValue={this.state.source}></textarea>
      <button onClick={this.compileTemplate}>Compile</button>
      <textarea id="contextString" spellCheck={false} cols="60" rows="30" defaultValue={this.state.contextString}></textarea>
      <button onClick={this.updateContext}>Update</button>
      <Stamp template={this.state.template} context={this.state.context} />
    </div>);
  }
}

ReactDOM.render(
  <App template={template} source={source} context={context}/>,
  document.getElementById('root')
);

