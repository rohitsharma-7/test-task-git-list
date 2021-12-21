import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  reposData: null,
  reposError: null,
  issuesData: null,
  issuesError: null,
  pullRequestData: null, 
  pullRequestError: null,
  subscription: null,
  subscriptionError: null,
  createIssueSuccess: null,
  createIssueError: null,
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
            case ActionTypes.SUBSCRIPTION_REQUEST:
              return {
                ...state,
                subscription: null, 
                subscriptionError: null,
              };
            case ActionTypes.SUBSCRIPTION_SUCCESS:
              return {
                ...state,
                subscription: action.payload,
                subscriptionError: null,
              };
            case ActionTypes.SUBSCRIPTION_FAILURE:
              return {
                ...state,
                subscription: null,
                subscriptionError: JSON.parse(action.error),
              };
              case ActionTypes.CREATE_ISSUE_REQUEST:
                return {
                  ...state,
                  createIssueSuccess: null, 
                  createIssueError: null,
                };
              case ActionTypes.CREATE_ISSUE_SUCCESS:
                return {
                  ...state,
                  createIssueSuccess: action.payload,
                  createIssueError: null,
                };
              case ActionTypes.CREATE_ISSUE_FAILURE:
                return {
                  ...state,
                  createIssueSuccess: null,
                  createIssueError: JSON.parse(action.error),
                };
      default:
        return {
          ...state,
        };
    }
  }
  
  export default eventReducer;