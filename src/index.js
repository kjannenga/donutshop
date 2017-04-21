import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as Router} from 'react-router-dom';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider><Router>
  <App /></Router></MuiThemeProvider>,
  document.getElementById('root')
);
