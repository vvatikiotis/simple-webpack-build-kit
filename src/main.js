import React from 'react';
import ReactDOM from 'react-dom';
import _debug from 'debug';
const debug = _debug('app');

import 'styles/styles.css';

import App from 'js/app';

ReactDOM.render(
  <App />,
  document.getElementById('app-root')
);
