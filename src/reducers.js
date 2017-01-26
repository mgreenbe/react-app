import { fromJS } from 'immutable'
import { compile } from 'handlebars'

export const editorReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      const updatedState = state.merge(action.update);
      const { parseSuccess, compileSuccess, template, context } = updatedState.toJS();
      if (parseSuccess && compileSuccess) { // stamp template, render preview
        const stampedTemplate = template(context);
        // console.log(stampedTemplate);
        return updatedState.set('stampedTemplate', stampedTemplate);
      } else {
        return updatedState;
      }
    default:
      console.log('editorReducer: hit the default')
      return state;
  }
} 

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