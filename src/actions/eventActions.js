import * as ActionTypes from './actionTypes';

export function getRepoRequest(userData) {
  return {
    type: ActionTypes.GET_REPO_REQUEST,
    userData,
  };
}

export function getRepoSuccess(payload) {
  return {
    type: ActionTypes.GET_REPO_SUCCESS,
    payload,
  };
}

export function getRepoError(error) {
  return {
    type: ActionTypes.GET_REPO_FAILURE,
    error,
  };
}

export function getIssuesRequest(params) {
  return {
    type: ActionTypes.GET_ISSUES_REQUEST,
    params,
  };
}

export function getIssuesSuccess(payload) {
  return {
    type: ActionTypes.GET_ISSUES_SUCCESS,
    payload,
  };
}

export function getIssuesError(error) {
  return {
    type: ActionTypes.GET_ISSUES_FAILURE,
    error,
  };
}

export function getPRRequest(params) {
  return {
    type: ActionTypes.GET_PR_REQUEST,
    params,
  };
}

export function getPRSuccess(payload) {
  return {
    type: ActionTypes.GET_PR_SUCCESS,
    payload,
  };
}

export function getPRError(error) {
  return {
    type: ActionTypes.GET_PR_FAILURE,
    error,
  };
}
