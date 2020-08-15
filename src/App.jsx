import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import Routes from './routes';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
