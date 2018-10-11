import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app/App';
import { Provider } from 'react-redux';
import configureStore from './app/redux/configureStore';
import TestComponent from './app/components/TestComponent';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <TestComponent />
  </Provider>,
  document.getElementById('root')
);
