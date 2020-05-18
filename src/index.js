import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';

ReactDOM.render(
  <React.StrictMode>
    <App />           //what we want to show
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')     //where we want to show it
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
