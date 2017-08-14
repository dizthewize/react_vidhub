import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/app';
import About from './components/about';


export default (
  <div>
    <Route exact path='/' component={App} />
    <Route exact path='/about' component={About} />
  </div>
);
