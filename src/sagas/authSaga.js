import {all, call, put, takeLatest, delay, takeEvery} from 'redux-saga/effects';
import {
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError,
} from '../actions/authActions';
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
  
  function* doSignIn(action) {
    try {
      yield put(startLoader());
      opts.method = CONST.GET_API;
      opts.url = ApiConfig.API_METHOD_LOGIN + action.signInData.email;
      const signInResponse = yield call(CommonFetch, action, opts);
      yield put(stopLoader());
      yield put(signInSuccess(signInResponse));
    } catch (error) {
      yield put(stopLoader());
      yield put(signInError(error?.message));
    }
  }
  
  function* watchGetRequest() {
    yield takeEvery(ActionTypes.DO_SIGNIN_REQUEST, doSignIn);
  }
  
  export default function* sagas() {
    yield all([watchGetRequest()]);
  }