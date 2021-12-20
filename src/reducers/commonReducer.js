import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: null,
};

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.START_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.STOP_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
      default:
        return {
          ...state,
        };
    }
  }
  
  export default commonReducer;