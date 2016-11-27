import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import chapters from './chapters';

const rootReducer = combineReducers({
  chapters,
  form
});

export default rootReducer;
