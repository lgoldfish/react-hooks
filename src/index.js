import React from 'react';
import ReactDOM from 'react-dom';
import ReactHookRedux from 'react-hooks-redux';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './models/reducers';
// import reducers from './models/hooks-reducer';
import Routes from './router';
import { Provider, store } from './models/hooks-reducer';
import css from './index.css';
import 'whatwg-fetch';
// const store = createStore(reducers);
ReactDOM.render(
  <Provider>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);
