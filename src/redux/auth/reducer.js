import * as constantActions from './constants';

export const initialState = {
  auth: {
    data: null,
    loading: false,
    success: null,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constantActions.AUTHENTICATION:
      return {
        auth: {
          ...state.auth,
          loading: true,
        },
      };

    case constantActions.AUTHENTICATION_SUCCESS:
      return {
        auth: {
          ...state.auth,
          data: action.payload,
          loading: false,
          success: 'User logged',
        },
      };

    case constantActions.AUTHENTICATION_ERROR:
      return {
        auth: {
          ...state.auth,
          data: action.payload,
          loading: false,
          error: 'User not authenticated',
        },
      };

    default:
      return state;
  }
};
