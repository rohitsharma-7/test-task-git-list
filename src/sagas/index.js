/**
 * RootSaga
 */

import {all} from 'redux-saga/effects';
import authSagas from './authSaga';
import eventSaga from './eventSaga';

export default function* rootSaga() {
  yield all([authSagas(), eventSaga()]);
}
