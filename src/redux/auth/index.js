import { useSelector, useDispatch } from 'react-redux';

import * as actionCreators from './constants';

import reducer, { initialState } from './reducer';
import epics from './epics';

export {
  reducer,
  epics,
  initialState,
};

export const useAuth = () => {
  const stateAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const actions = {
    authentication: (data) => dispatch(actionCreators.authenticationAction({ data })),
  };

  return {
    ...stateAuth,
    ...actions,
  };
};
