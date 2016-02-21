import 'styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'js/redux';

const store = createStore(reducer);

import _debug from 'debug';
const debug = _debug('app');

import App from 'js/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);
