import { compile } from 'handlebars'

export const parseContext = (contextStr) => {
  try {
    const contextObj = JSON.parse(contextStr);
    return contextObj;
  }
  catch(e)
  {
    console.warn('Couldn\'t parse string to JSON');
  }
}

export const compileSource = (source) => {
  try {
    const template = compile(source);
    return template;
  }
  catch(e)
  {
    console.warn('Couldn\'t compile source');
    // console.error(e);
  }
}

export const updateEditors = e => {
  let update
  let action = {type: 'UPDATE'};
  switch (e.target.id) {
    case 'context':
      const contextStr = e.target.value;
      const contextObj = parseContext(contextStr);
      const parseSuccess = !!contextObj;
      update = (contextObj) ?
        {contextStr: JSON.stringify(contextObj, null, 2), contextObj, parseSuccess} :
        {contextStr, parseSuccess};
      action.update = update
      return action;
    case 'source':
      const source = e.target.value;
      const template = compileSource(source);
      const compileSuccess = !!template;
      update = (template) ? {source, template, compileSuccess} : {source, compileSuccess};
      action.update = update;
      return action;
    default:
      console.log('updateEditors: hit the default')
  }
}