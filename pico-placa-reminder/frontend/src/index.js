import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Import Bootstrap in all the project
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:4000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
