import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/APP';
import * as serviceWorker from './serviceWorker';

import Homepage from './containers/Home/Homepage';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
