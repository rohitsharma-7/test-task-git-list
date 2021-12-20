import * as ActionTypes from '../actions/actionTypes';

export function doSignIn(signInData) {
  return {
    type: ActionTypes.DO_SIGNIN_REQUEST,
    signInData,
  };                                               
}

export function signInSuccess(signInResponse) {
  return {
    type: ActionTypes.SIGNIN_SUCCESS,
    params: signInResponse,
  };
}

export function signInError(signInErrorParams) {
  return {
    type: ActionTypes.SIGNIN_FAILURE,
    params: signInErrorParams,
  };
}

