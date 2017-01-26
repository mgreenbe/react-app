import { fromJS, Map } from 'immutable';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { contextStr, source } from './data.js';
import { editorReducer } from './reducers.js';
import { updateContext, updateTemplate } from './actions';

const initializeEditorState = function(contextStr, source) {
  const initialContext = updateContext(contextStr);
  const initialTemplate = updateTemplate(source);
  const { parseSuccess, context } = initialContext;
  const { compileSuccess, template } = initialTemplate;
  if (parseSuccess && compileSuccess) {
    const stampedTemplate = template(context);
    // console.log(stampedTemplate);
    return Object.assign(initialContext, initialTemplate, {stampedTemplate}) 
  } else {
    return Object.assign(initialContext, initialTemplate);
  }
}

const initialEditorState = Map(
  initializeEditorState(contextStr, source)
  // Object.assign(
  //   updateContext(contextStr),
  //   updateTemplate(source)
  // )
);

const initialState = Map({
  editor: initialEditorState,
  form: null
});

const reducer = combineReducers({
  editor: editorReducer,
  form: formReducer
});

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

store.subscribe( () => console.log(store.getState()));

export default store;
