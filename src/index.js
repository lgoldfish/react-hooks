import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./models/reducers";
import Routes from "./router";
import css from "./index.css";
import "whatwg-fetch";
const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
         <Routes />
     </Provider> ,
    document.getElementById("app")
)