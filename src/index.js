import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import GlobalState from './store/GlobalState';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalState>
  </React.StrictMode>,
  document.getElementById('root')
);
