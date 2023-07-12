import React from 'react';
import {createRoot} from 'react-dom/client';
import 'react-mdl/extra/css/material.amber-indigo.min.css';
import 'react-mdl/extra/material.min.js';

import App from "./App"
import * as registerServiceWorker from './registerServiceWorker';


const root = createRoot(document.getElementById('root'));
root.render(<App />);
registerServiceWorker.register();