import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
let { BrowserRouter } = Router;

// -- Import components
import routes from './routes';

ReactDOM.render((
  <Router routes={routes} />
), document.querySelector('#app'));
