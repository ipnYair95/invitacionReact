import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import ReactGA from 'react-ga4';

ReactGA.initialize("G-KH6J5Y7K78");

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
