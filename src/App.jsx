import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import { Login } from './pages';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Login />
  </Provider>
);
