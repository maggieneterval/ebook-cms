import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './Components/App';
import BookForm from './Components/Books/Book';
import Section from './Components/Sections/Section';
import SectionForm from './Components/Sections/SectionForm';
import BlockForm from './Components/Blocks/BlockForm';

import { asyncGetAllSections } from './reducers/sections';


function getAllSections (nextState, replace, callback) {
  return store.dispatch(asyncGetAllSections(1)) //TODO: replace hard-coded book with dynamic book ID based on user-selected book
    .then(() => callback());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={getAllSections}>
        <IndexRoute component={Section} />
        <Route path="/book-form" component={BookForm} />
        <Route path="/section-form" component={SectionForm} />
        <Route path="/block-form" component={BlockForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
