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
import UseReducer from './routes/UseReducer';
import HookReddux from './routes/HookRedux';
import UseRef from './routes/UseRef';
import UseCallBack from './routes/UseCallback';
import UseMemo from './routes/UseMemo';
import UseImperativeMethods from './routes/UseImperativeMethods';
import UseLayoutEffect from './routes/UseLayoutEffect';
import ClassCompotent from './routes/ClassCompotent';

const Routes = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/usestate" component={UseState} />
        <Route path="/useeffect" component={UseEffect} />
        <Route path="/customhook" component={CustomHook} />
        <Route path="/usecontext" component={UseContext} />
        <Route path="/usereducer" component={UseReducer} />
        <Route path="/hookredux" component={HookReddux} />
        <Route path="/class" component={ClassCompotent} />
        <Route path="/useref" component={UseRef} />
        <Route path="/usecallback" component={UseCallBack} />
        <Route path="/usememo" component={UseMemo} />
        <Route path="/useImperativeMethods" component={UseImperativeMethods} />
        <Route path="/UseLayoutEffect" component={UseLayoutEffect} />
        <Route component={NoMatch} />
      </Switch>
    </App>
  </Router>
);
export default Routes;
