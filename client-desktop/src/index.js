import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import configureStore from './app/redux/configureStore';
const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App persistor={persistor} />
  </Provider>,
  document.getElementById('root')
);
