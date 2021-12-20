/**
 * @ApiService is the single entry point for all api's calling, Here the Single fetch is written that will serve requests
 */

import * as Config from './config';
import * as CONST from '../utils/Constants';
import * as AppConfig from '../utils/AppConfig';

const ERROR_CODES = {
  KNOWN: 'KNOWN',
  UNKNOWN: 'UNKNOWN',
  TIMEOUT: 'TIMEOUT',
};

const throwError = (
  error,
  errorCode = ERROR_CODES.KNOWN,
  fromCatchBlock = true,
) => {
  let errorObj = {};
  switch (errorCode) {
    case ERROR_CODES.KNOWN:
      if (error) {
        if (fromCatchBlock) {
          if (error.message) {
            errorObj = error.message;
          } else {
            errorObj = JSON.stringify({
              status: 0,
              msg: 'Request timed out, please check your internet connection and try again.',
              errorCode: ERROR_CODES.TIMEOUT,
            });
          }
        } else {
          errorObj = JSON.stringify(error);
        }
      } else {
        errorObj = JSON.stringify({
          status: 0,
          msg: 'Request timed out, please check your internet connection and try again.',
          errorCode: ERROR_CODES.TIMEOUT,
        });
      }

      break;
    case ERROR_CODES.TIMEOUT:
      errorObj = JSON.stringify({
        status: 0,
        msg: 'Request timed out, please check your internet connection and try again.',
        errorCode: ERROR_CODES.TIMEOUT,
      });
      break;
    case ERROR_CODES.UNKNOWN:
    default:
      errorObj = JSON.stringify({
        status: 0,
        msg: 'There was some problem connecting to Boom.TV servers, please check your internet connection and try again.',
        errorCode: ERROR_CODES.UNKNOWN,
      });
      break;
  }

  throw new Error(errorObj);
};

export async function CommonFetch(params, opt) {
  try {
    let URL = 
      `${Config.API_ENDPOINT}` + `${opt.url}`;

    let uriParams = new URLSearchParams(params).toString();

    const Options = {
      method: opt.method,
      URL,
      body: uriParams,
    };

    const ReqOptions = {
      method: Options.method,
      headers: {
        Authorization: `token ${AppConfig.userToken()}`,
        'Cache-Control': 'no-cache',
        'x-mobile-request': 1,
      },
      body: uriParams,
      timeout: CONST.API_TIMEOUT,
    };

    ReqOptions.headers.Accept = 'application/json';
    ReqOptions.headers['Content-Type'] =
      'application/x-www-form-urlencoded;charset=UTF-8';

    if (ReqOptions.method === CONST.GET_API) {
      delete ReqOptions.body;
      if (opt.shouldAddGetParams === true) {
        URL += '?';
        URL += uriParams;
      }
    } else {
      ReqOptions.body = Options.body;
    }

    try {
      return new Promise((Resolve, Reject) => {
        requestTimeoutPromise(
          ReqOptions.timeout,
          fetch(URL, ReqOptions),
          Resolve,
          Reject,
        );
      })
        .then((Response) => {
          if (Response.status === 200 || Response.status === 201) {
            return Response.json().then((responseObject) => {
              return responseObject;
            });
          } else if (Response.status === 400 || Response.status === 403) {
            //TO DO handle application state for 400/403
            return Response.json().then((res) => {
              if (res) {
                return throwError(res, ERROR_CODES.KNOWN, false);
              }
              return throwError(null, ERROR_CODES.UNKNOWN, false);
            });
          } else if (Response.status === 404) {
            //TO DO handle application state for 404
            return Response.json().then((res) => {
              if (res) {
                return throwError(res, ERROR_CODES.KNOWN, false);
              }
              return throwError(null, ERROR_CODES.UNKNOWN, false);
            });
          } else {
            //TO DO handle application state for any other type of error
              return throwError(null, ERROR_CODES.UNKNOWN, false);
            
          }
        })
        .catch((error) => {
          if (
            error === 'Request Timeout' ||
            error === 'Network request failed'
          ) {
            return throwError(null, ERROR_CODES.TIMEOUT);
          }
          return throwError(error, ERROR_CODES.KNOWN);
        });
    } catch (error) {
      return throwError(error, ERROR_CODES.KNOWN);
    }
  } catch (error) {
    return throwError(error, ERROR_CODES.KNOWN);
  }
}


/**
 * Request Timeout Promise
 */
function requestTimeoutPromise(
  waitingTime,
  promise,
  resoveInternal,
  rejectInternal,
) {
  const _timeout = setTimeout(() => {
    rejectInternal('TIMEOUT');
  }, waitingTime);
  try {
    promise.then(
      (res) => {
        clearTimeout(_timeout);
        resoveInternal(res);
      },
      (resError) => {
        throwError(resError, ERROR_CODES.KNOWN, false);
        clearTimeout(_timeout);
        rejectInternal('Request Timeout');
      },
    );
  } catch (error) {
    throwError(error, ERROR_CODES.KNOWN);
  }
}
