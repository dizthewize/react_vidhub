import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// -- Import components
import routes from './routes';
import App from './components/app';

ReactDOM.render(
  <Router>
    {routes}
  </Router>, document.querySelector('#app'));
