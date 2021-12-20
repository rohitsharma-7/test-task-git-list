import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  signInResponse: null,
  signInError: null,
  signUpResponse: null,
  signUpError: null,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.DO_SIGNIN_REQUEST:
      case ActionTypes.RESET_AUTH_SCREEN_DATA:
        return {
          ...state,
          signInResponse: null,
          signInError: null,
          signUpResponse: null,
          signUpError: null,
        };
      case ActionTypes.SIGNIN_SUCCESS:
        return {
          ...state,
          signInResponse: action.params,
          signInError: null,
          signUpResponse: null,
          signUpError: null,
        };
      case ActionTypes.SIGNIN_FAILURE:
        return {
          ...state,
          signInError: JSON.parse(action.params),
          signInResponse: null,
          signUpResponse: null,
          signUpError: null,
        };
      default:
        return {
          ...state,
        };
    }
  }
  
  export default authReducer;
  