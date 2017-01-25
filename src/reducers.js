import { Map } from 'immutable'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CONTEXT':
      return state.merge(updateContext(action.contextStr));
      // const { contextStr } = action;
      // let contextObj;
      // try {
      //   contextObj = JSON.parse(contextStr);
      // }
      // catch(e)
      // {
      //   console.warn('Couldn\'t parse string to JSON');
      // }
      // const update = (contextObj) 
      //   ? {contextStr: JSON.stringify(contextObj, null, 2), contextObj, parseSuccess: true}
      //   : {contextStr, parseSuccess: false};
      // return state.merge(update);
    case 'UPDATE_SOURCE':
      return state.set(action.key, action.value);
    default:
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

export const updateTemplate = (state, source) => {
  //   const { source } = action;
  //   const { compile } = state;
  //   let template;
  //   try {
  //     template = compile(source);
  //   }
  //   catch(e)
  //   {
  //     console.warn('Couldn\'t compile source');
  //   }
  //   const update = (template) 
  //     ? {source, template, compileSuccess: true}
  //     : {source, compileSuccess: false};
  //   return state.merge(update);
  // } else {
  //   return state;
  // }
}
