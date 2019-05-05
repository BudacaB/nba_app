import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import Register from './components/Register';
import Login from './components/Login';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )

ReactDOM.render(
    routing, document.querySelector('#root')
);