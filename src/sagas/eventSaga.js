import {all, call, put, takeLatest, delay, takeEvery} from 'redux-saga/effects';
import {
  getRepoSuccess,
  getRepoError,
  getIssuesSuccess,
  getIssuesError,
  getPRSuccess,
  getPRError,
  subscriptionSuccess,
  subscriptionError,
  createIssueSuccess,
  createIssueError,
} from '../actions/eventActions';
import * as ActionTypes from '../actions/actionTypes';
import {CommonFetch} from '../services/apiService';
import * as CONST from '../utils/Constants';
import * as ApiConfig from '../services/config';
import {startLoader, stopLoader} from '../actions/commonActions';

const opts = {
    method: '',
    url: null,
    body: null,
    useAccessToken: false,
    shouldAddGetParams: true,
  };
  
  function* getRepos(action) {
    try {
      yield put(startLoader());
      opts.method = CONST.GET_API;
      opts.url = ApiConfig.API_METHOD_GET_REPO.replace('{id}', action.userData);
      const reposData = yield call(CommonFetch, action, opts);
      yield put(stopLoader());
      yield put(getRepoSuccess(reposData));
    } catch (error) {
      yield put(stopLoader());
      yield put(getRepoError(error?.message));
    }
  }
  
  function* getIssues(action) {
    try {
      yield put(startLoader());
      opts.method = CONST.GET_API;
      opts.url = ApiConfig.API_METHOD_GET_ISSUES.replace('{repo_name}', action.params.repoName).replace('{user}', action.params.user);
      const issuesData = yield call(CommonFetch, {}, opts);
      yield put(stopLoader());
      yield put(getIssuesSuccess(issuesData));
    } catch (error) {
      yield put(stopLoader());
      yield put(getIssuesError(error?.message));
    }
  }

  function* getPR(action) {
    try {
      yield put(startLoader());
      opts.method = CONST.GET_API;
      opts.url = ApiConfig.API_METHOD_GET_PULL_REQUESTS.replace('{repo_name}', action.params.repoName).replace('{user}', action.params.user);
      const PRData = yield call(CommonFetch, {}, opts);
      yield put(stopLoader());
      yield put(getPRSuccess(PRData));
    } catch (error) {
      yield put(stopLoader());
      yield put(getPRError(error?.message));
    }
  }
  
  function* subscribeRepo(action) {
    try {
      yield put(startLoader());
      opts.method = CONST.PUT_API;
      opts.url = ApiConfig.API_METHOD_SUBSCRIBE.replace('{repo_name}', action.params.repoName).replace('{user}', action.params.user);
      const subs = yield call(CommonFetch, {}, opts);
      yield put(stopLoader());
      yield put(subscriptionSuccess(subs));
    } catch (error) {
      yield put(stopLoader());
      yield put(subscriptionError(error?.message));
    }
  }
  
  function* createIssue(action) {
    try {
      yield put(startLoader());
      opts.method = CONST.POST_API;
      opts.url = ApiConfig.API_METHOD_GET_ISSUES.replace('{repo_name}', action.params.repoName).replace('{user}', action.params.user);
      const response = yield call(CommonFetch, action.variables, opts);
      yield put(stopLoader());
      yield put(createIssueSuccess(response));
    } catch (error) {
      yield put(stopLoader());
      yield put(createIssueError(error?.message));
    }
  }


  function* watchGetRequest() {
    yield takeLatest(ActionTypes.GET_REPO_REQUEST, getRepos);
    yield takeLatest(ActionTypes.GET_ISSUES_REQUEST, getIssues);
    yield takeLatest(ActionTypes.GET_PR_REQUEST, getPR);
    yield takeLatest(ActionTypes.SUBSCRIPTION_REQUEST, subscribeRepo);
    yield takeLatest(ActionTypes.CREATE_ISSUE_REQUEST, createIssue);
  }
  
  export default function* sagas() {
    yield all([watchGetRequest()]);
  }