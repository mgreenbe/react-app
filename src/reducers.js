import { Map } from 'immutable'
import { compile } from 'handlebars'

export const editorReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE':
      const updatedState = state.merge(action.update);
      const { parseSuccess, compileSuccess, template, contextObj } = updatedState.toJS();
      if (updatedState.get('parseSuccess') && updatedState.get('compileSuccess')) {
        const stampedTemplate = template(contextObj);
        console.log(stampedTemplate);
        return updatedState.set('stampedTemplate', stampedTemplate);
      } else {
        return updatedState;
      }
    // case 'UPDATE_CONTEXT':
    //   return state.merge(updateContext(action.contextStr));
    // case 'UPDATE_SOURCE':
    //   const update = updateTemplate(action.source);
    //   console.log(update);
    //   const newState = state.merge(update);
    //   console.log(newState);
    //   return newState;
    default:
      console.log('hit the default')
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
  const update = (contextObj) 
    ? {contextStr: JSON.stringify(contextObj, null, 2), contextObj, parseSuccess: true}
    : {contextStr, parseSuccess: false};
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
