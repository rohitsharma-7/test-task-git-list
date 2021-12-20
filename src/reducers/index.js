import {combineReducers} from 'redux';
import configureStore from '../stores/CreateStore';
import rootSaga from '../sagas';
import authReducer from './authReducer';
import commonReducer from './commonReducer';
import eventReducer from './eventReducer';

export default () => {
  const rootReducer = combineReducers({
    authReducer,
    commonReducer,
    eventReducer,
  });

  return configureStore(rootReducer, rootSaga);
};