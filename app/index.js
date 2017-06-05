import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';

import reducers from './reducers';
import routes from './routes';

import './index.scss';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root'),
);
