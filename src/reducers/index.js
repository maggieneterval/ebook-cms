import { combineReducers } from 'redux';
import users from './users';
import books from './books';
import sections from './sections';
import blocks from './blocks';

const rootReducer = combineReducers({
  users,
  books,
  sections,
  blocks
});

export default rootReducer;
