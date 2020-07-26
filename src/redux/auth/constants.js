export const createAction = (type) => (payload) => ({ type, payload });

const DEFAULT_DUCK_PREFIX = 'SERVERS';

const AUTHENTICATION = `${DEFAULT_DUCK_PREFIX}/AUTHENTICATION`;
const AUTHENTICATION_SUCCESS = `${DEFAULT_DUCK_PREFIX}/AUTHENTICATION_SUCCESS`;
const AUTHENTICATION_ERROR = `${DEFAULT_DUCK_PREFIX}/AUTHENTICATION_ERROR`;

const authenticationAction = createAction(AUTHENTICATION);
const authenticationSuccessAction = createAction(AUTHENTICATION_SUCCESS);
const authenticationErrorAction = createAction(AUTHENTICATION_ERROR);

export {
  /**
    * Constants
    */
  AUTHENTICATION,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR,

  /**
    * actions
    */
  authenticationAction,
  authenticationSuccessAction,
  authenticationErrorAction,
};
