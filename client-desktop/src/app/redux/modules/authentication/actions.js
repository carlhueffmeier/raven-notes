import * as types from './types';

/**
 * Fetches the current user.
 */
const fetchCurrentUser = () => ({
  type: types.FETCH_CURRENT_USER.START
});
const fetchCurrentUserSuccess = payload => ({
  type: types.FETCH_CURRENT_USER.SUCCESS,
  payload
});
const fetchCurrentUserError = error => ({
  type: types.FETCH_CURRENT_USER.ERROR,
  error
});

/**
 * Starts the sign in process.
 *
 * @param payload User sign in information.
 * @param payload.email The email of the user.
 * @param payload.password The password of the user.
 */
const signin = payload => ({
  type: types.SIGNIN.START,
  payload
});
const signinSuccess = payload => ({
  type: types.SIGNIN.SUCCESS,
  payload
});
const signinError = error => ({
  type: types.SIGNIN.ERROR,
  error
});

/**
 * Starts the sign up process.
 *
 * @param payload User sign up information.
 * @param payload.name The name of the user.
 * @param payload.email The email of the user.
 * @param payload.password The password of the user.
 */
const signup = payload => ({
  type: types.SIGNUP.START,
  payload
});
const signupSuccess = payload => ({
  type: types.SIGNUP.SUCCESS,
  payload
});
const signupError = error => ({
  type: types.SIGNUP.ERROR,
  error
});

/**
 * Starts the sign out process.
 */
const signout = () => ({
  type: types.SIGNOUT
});

/**
 * Starts the sign out process.
 */
const resetAuthHeaders = () => ({
  type: types.RESET_AUTH_HEADERS
});

export {
  fetchCurrentUser,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  signin,
  signinSuccess,
  signinError,
  signup,
  signupSuccess,
  signupError,
  signout,
  resetAuthHeaders
};
