import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import * as firebase from 'firebase'; (npm install firebase --save)

ReactDOM.render(
  <App />, document.getElementById('root'));
registerServiceWorker();
