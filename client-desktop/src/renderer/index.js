import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App persistor={persistor} />
  </Provider>,
  document.getElementById('app')
);
