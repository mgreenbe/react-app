import { fromJS } from 'immutable';
import { compile } from 'handlebars';

export const updateContext = (contextStr) => {
  let contextObj;
  try {
    contextObj = JSON.parse(contextStr);
  }
  catch(e)
  {
    console.warn('Couldn\'t parse string to JSON');
  }
  const update = (contextObj) ? {
    contextStr: JSON.stringify(contextObj, null, 2),
    context: fromJS(contextObj), parseSuccess: true
  } : {
    contextStr,
    parseSuccess: false
  };
  return update;
}

export const updateTemplate = (source) => {
  let template;
  try {
    template = compile(source);
  }
  catch(e)
  {
    // console.warn('Couldn\'t compile source');
    console.error(e);
  }
  const update = (template) 
    ? {source, template, compileSuccess: true}
    : {source, compileSuccess: false};
  return update;
}

const updaters = {
  'context': updateContext,
  'template': updateTemplate
};

export const updateEditors = e => {
  let action = {type: 'UPDATE'};
  action.update = updaters[e.target.id](e.target.value);
  return action;
}
