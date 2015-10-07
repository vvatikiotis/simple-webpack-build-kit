'use strict';

import 'bootstrap';
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/app';

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('#app-root'));