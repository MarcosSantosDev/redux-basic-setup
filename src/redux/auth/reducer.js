import * as constantActions from './constants';

export const initialState = {
  auth: {
    data: null,
    loading: false,
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
        },
      };

    case constantActions.AUTHENTICATION_ERROR:
      return {
        auth: {
          ...state.auth,
          loading: false,
        },
      };

    default:
      return state;
  }
};
