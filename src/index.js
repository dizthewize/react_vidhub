import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// -- Import components
import routes from './routes';

ReactDOM.render(
  <Router>
    {routes}
  </Router>, document.querySelector('.container'));
