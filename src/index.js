import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import { BrowserRouter as Router} from 'react-router-dom';
 
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

