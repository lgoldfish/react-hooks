import React, {Component} from "react";
import {BrowserRouter as Router, history,Route} from "react-router-dom";
import IndexPage from "./routes/IndexPage";
const Routes = () => (
    <Router history={history}>
        <Route path="/" component={IndexPage}>
        </Route>
    </Router>
)
export default Routes;