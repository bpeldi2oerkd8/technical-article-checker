import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Title from './Title';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.Fragment>
    <Router basename={process.env.PUBLIC_URL}>
      <Title />
      <App />
      <Footer />
    </Router>
  </React.Fragment>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
