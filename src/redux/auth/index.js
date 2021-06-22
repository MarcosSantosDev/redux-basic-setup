import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';

import * as actionCreators from './constants';

import reducer, { initialState } from './reducer';
import epics from './epics';

import { STORAGE_USER_DATA, STORAGE_USER_IS_LOGGED } from '../constants';

import useLocalStorage from '../../hooks/useLocalStorage';

export {
  reducer,
  epics,
  initialState,
};

export const useAuth = () => {
  const stateAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [, setUserData] = useLocalStorage(STORAGE_USER_DATA);
  const [isLogged, setIsLogged] = useLocalStorage(STORAGE_USER_IS_LOGGED);

  const handleAuth = {
    logged: (data) => {
      setUserData(data)
      setIsLogged(true)
      navigate('/', { replace: false });
    },
    logout: () => {
      setUserData(null)
      setIsLogged(false)
      navigate('/login', { replace: false });
    },
    isLogged
  }

  const actions = {
    authentication: (data) => dispatch(actionCreators.authenticationAction({ data })),
  };

  return {
    ...stateAuth,
    ...handleAuth,
    ...actions,
  };
};
