import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {
  initialState,
  rootReducer,
  rootEpic,
} from './root';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
