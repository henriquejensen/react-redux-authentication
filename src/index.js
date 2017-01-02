import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";
import routes from './routes';
import './index.css';

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger()));

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
