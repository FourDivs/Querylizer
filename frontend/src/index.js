import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'beautiful-react-diagrams/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";



//REDUX
import {createStore} from 'redux'
import allReducers from './reducers';
import {Provider} from "react-redux"

let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();


ReactDOM.render(
  <Provider store = {store}>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <App />
    </StyletronProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
