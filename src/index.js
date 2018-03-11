import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Router >
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={App} />
    </Switch>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
