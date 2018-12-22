import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopupApp from './popup/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PopupApp />, document.getElementById('root'));
console.log('this is indexjs file')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
