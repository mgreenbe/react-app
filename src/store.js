import { fromJS, Map } from 'immutable';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { contextStr, source } from './data.js';
import { updateContext, updateTemplate, editorReducer } from './reducers.js';

const initialEditorState = Map(
  Object.assign(
    updateContext(contextStr),
    updateTemplate(source)
  )
);

const initialState = fromJS({
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
