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
