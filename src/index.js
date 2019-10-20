import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/css/material.amber-indigo.min.css';
import 'react-mdl/extra/material.min.js';
import App from "./App"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();