import React from 'react';
import ReactDOM from 'react-dom';
// global css
import './index.css';
import Router from './Router';
import StoreWrapper from './StoreWrapper';

global.React = React;

ReactDOM.render(
  <React.StrictMode>
    <StoreWrapper>
      <Router />
    </StoreWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
