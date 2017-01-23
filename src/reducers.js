export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SOURCE':
    case 'UPDATE_CONTEXT':
      return state.set(action.key, action.value);
    default:
      return state;
  }
} 