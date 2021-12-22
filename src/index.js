import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { ThemeProvider } from 'react-bootstrap';

ReactDOM.render(
  <ThemeProvider dir="rtl">
   <App />
   </ThemeProvider>, document.getElementById('root'));
