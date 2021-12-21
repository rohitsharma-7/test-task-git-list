export const baseURL = {
    prod: 'https://api.github.com',
  };
  
  export var API_ENDPOINT = baseURL.prod;
  //Example
  export const API_METHOD_LOGIN = '/users/';
  export const API_METHOD_GET_REPO = '/users/{id}/repos';
  export const API_METHOD_GET_ISSUES = '/repos/{user}/{repo_name}/issues';
  export const API_METHOD_GET_PULL_REQUESTS = '/repos/{user}/{repo_name}/pulls';
  export const API_METHOD_SUBSCRIBE = '/repos/{user}/{repo_name}/subscription';