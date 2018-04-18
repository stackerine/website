import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import 'devicon';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import withTracker from './withTracker';

ReactDOM.render(
  <Router basename="/stackerine">
    <Route component={withTracker(App)} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
