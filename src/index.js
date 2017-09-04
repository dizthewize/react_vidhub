import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// -- Import components
import Routes from './routes';

// -- material-ui plugins
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

const container = document.querySelector('.container');

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </BrowserRouter>,
container);
