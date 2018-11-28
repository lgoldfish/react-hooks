import React, { Component } from 'react';
import {
  BrowserRouter as Router, history, Route, Switch,
} from 'react-router-dom';
import App from '../App';
import NoMatch from './routes/NoMatch';
import IndexPage from './routes/IndexPage';
import UseState from './routes/UseState';
import UseEffect from './routes/UseEffect';
import UseContext from './routes/UseContext';
import CustomHook from './routes/CustomHook';
import ClassCompotent from './routes/ClassCompotent';

const Routes = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/usestate" component={UseState} />
        <Route path="/useeffect" component={UseEffect} />
        <Route path="/usecontext" component={UseContext} />
        <Route path="/customhook" component={CustomHook} />
        <Route path="/class" component={ClassCompotent} />
        <Route component={NoMatch} />
      </Switch>
    </App>
  </Router>
);
export default Routes;
