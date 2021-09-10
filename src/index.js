import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store/Store';
import App from './App';
import { initialState, appReducer } from './store/appReducer';

ReactDOM.render(
  <StoreProvider initialState={initialState} reducer={appReducer}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
