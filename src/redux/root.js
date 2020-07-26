import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import * as auth from './auth';

const combinedReducer = combineReducers({
  auth: auth.reducer,
});

export const initialState = {
  auth: auth.initialState,
};

export const rootReducer = (state = initialState, action) => {
  // reset redux state
  if (action.type === 'RESET_STATE') {
    return initialState;
  }

  return combinedReducer(state, action);
};

export const rootEpic = combineEpics(
  auth.epics,
);
