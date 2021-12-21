import * as ActionTypes from '../actions/actionTypes';

export function startLoader() {
  return {
    type: ActionTypes.START_LOADING_SUCCESS,
  };
}

export function stopLoader() {
  return {
    type: ActionTypes.STOP_LOADING_SUCCESS,
  };
}

export function logout() {
  return {
    type: ActionTypes.RESET_AUTH_SCREEN_DATA,
  };
}

export function addSubscribedRepo(repos) {
  return {
    type: ActionTypes.ADD_SUBSCRIBED_REPO_REQUEST,
    repos,
  };
}

export function removeSubscribedRepo(repos) {
  return {
    type: ActionTypes.REMOVE_SUBSCRIBED_REPO_REQUEST,
    repos,
  };
}