import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './Components/App';
import NewChapterForm from './Components/NewChapterForm';
import Chapter from './Components/Chapter';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from 'axios';

function getChapter (nextState) {
  console.log('nextState: ', nextState);
  //get request using nextState.params.chapter
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NewChapterForm} />
        <Route path="/new" component={NewChapterForm} />
        <Route path="/:chapter" component={Chapter} onEnter={getChapter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

