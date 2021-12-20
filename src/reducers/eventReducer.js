import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  reposData: null,
  reposError: null,
  issuesData: null,
  issuesError: null,
  pullRequestData: null, 
  pullRequestError: null,
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_REPO_REQUEST:
      return {
        ...state,
        reposData: null,
        reposError: null,
      };
    case ActionTypes.GET_REPO_SUCCESS:
      return {
        ...state,
        reposData: action.payload,
        reposError: null,
      };
    case ActionTypes.GET_REPO_FAILURE:
      return {
        ...state,
        reposData: null,
        reposError: JSON.parse(action.error),
      };
      case ActionTypes.GET_ISSUES_REQUEST:
        return {
          ...state,
          issuesData: null,
          issuesError: null,
        };
      case ActionTypes.GET_ISSUES_SUCCESS:
        return {
          ...state,
          issuesData: action.payload,
          issuesError: null,
        };
      case ActionTypes.GET_ISSUES_FAILURE:
        return {
          ...state,
          issuesData: null,
          issuesError: JSON.parse(action.error),
        };
        case ActionTypes.GET_PR_REQUEST:
            return {
              ...state,
              pullRequestData: null, 
              pullRequestError: null,
            };
          case ActionTypes.GET_PR_SUCCESS:
            return {
              ...state,
              pullRequestData: action.payload, 
              pullRequestError: null,
            };
          case ActionTypes.GET_PR_FAILURE:
            return {
              ...state,
              pullRequestData: null, 
              pullRequestError: JSON.parse(action.error),
            };
      default:
        return {
          ...state,
        };
    }
  }
  
  export default eventReducer;