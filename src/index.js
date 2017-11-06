import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>, app);
