import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// -- Import components
import Routes from './routes';

// -- material-ui plugins
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

ReactDOM.render(
  <Router>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </Router>, document.querySelector('.container'));
