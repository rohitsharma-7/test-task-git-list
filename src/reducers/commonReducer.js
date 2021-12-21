import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: null,
  subscribedRepos: []
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
    case ActionTypes.ADD_SUBSCRIBED_REPO_REQUEST:
    case ActionTypes.REMOVE_SUBSCRIBED_REPO_REQUEST:
      return {
        ...state,
        subscribedRepos: action.repos,
      }
      default:
        return {
          ...state,
        };
    }
  }
  
  export default commonReducer;