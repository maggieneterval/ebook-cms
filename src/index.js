import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './Components/App';
import NewChapterForm from './Components/NewChapterForm';
import Chapter from './Components/Chapter';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { asyncGetAllChapters } from './reducers/chapters';

function getAllChapters (nextState, replace, callback) {
  return store.dispatch(asyncGetAllChapters())
    .then(() => callback());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={getAllChapters}>
        <IndexRoute component={NewChapterForm} />
        <Route path="/new" component={NewChapterForm} />
        <Route path="/:chapter" component={Chapter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

