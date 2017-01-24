export const reducer = (state = {source: '', context: {}}, action) => {
  console.log(JSON.stringify(state));
  switch (action.type) {
    case 'UPDATE_SOURCE':
    case 'UPDATE_CONTEXT':
      return state.set(action.key, action.value);
    default:
      return state;
  }
} 