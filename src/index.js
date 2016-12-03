import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './Components/App';
import BookForm from './Components/Books/Book';
import SectionForm from './Components/Sections/Section';
import BlockForm from './Components/Blocks/BlockForm';

import { asyncGetAllSections } from './reducers/sections';


function getAllChapters (nextState, replace, callback) {
  return store.dispatch(asyncGetAllSections())
    .then(() => callback());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={getAllChapters}>
        <IndexRoute component={SectionForm} />
        <Route path="/book-form" component={BookForm} />
        <Route path="/section-form" component={SectionForm} />
        <Route path="/block-form" component={BlockForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
