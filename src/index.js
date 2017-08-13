import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// -- Import components
import routes from './routes';

ReactDOM.render((
  <BrowserRouter routes={routes} />
), document.querySelector('#app'));
