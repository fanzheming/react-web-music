import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

//重置css
import '@/assets/css/reset.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
