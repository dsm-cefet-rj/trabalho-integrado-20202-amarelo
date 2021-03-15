import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
//import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';

const store= createStore(rootReducer);

ReactDOM.render(
  <App  />, document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
