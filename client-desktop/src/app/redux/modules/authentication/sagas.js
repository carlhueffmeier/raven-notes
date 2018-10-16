import { call, put, takeEvery, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import graphqlClient from '../../../api/graphqlClient';
import * as actions from './actions';
import * as selectors from './selectors';
import { FETCH_CURRENT_USER, SIGNIN, SIGNUP, SIGNOUT, RESET_AUTH_HEADERS } from './types';
import { CURRENT_USER_QUERY, SIGNIN_MUTATION, SIGNUP_MUTATION } from './graphql';
import { fetchCurrentUserResponseSchema, signinResponseSchema } from './schema';

function* fetchCurrentUser() {
  try {
    const response = yield call([graphqlClient, 'request'], CURRENT_USER_QUERY);
    const normalizedResponse = normalize(response, fetchCurrentUserResponseSchema);
    yield put(actions.fetchCurrentUserSuccess(normalizedResponse));
  } catch (error) {
    console.error(error);
    yield put(actions.fetchCurrentUserError(error));
  }
}

function* signin(action) {
  try {
    const signinInfo = action.payload;
    const response = yield call([graphqlClient, 'request'], SIGNIN_MUTATION, signinInfo);
    const normalizedData = normalize(response.signin, signinResponseSchema);
    yield put(actions.signinSuccess(normalizedData));
    yield call(resetAuthHeaders);
    yield call(fetchCurrentUser);
  } catch (error) {
    console.error(error);
    yield put(actions.signinError(error));
  }
}

function* signup(action) {
  try {
    const signupInfo = action.payload;
    const response = yield call([graphqlClient, 'request'], SIGNUP_MUTATION, signupInfo);
    const normalizedData = normalize(response.signup, signinResponseSchema);
    yield put(actions.signupSuccess(normalizedData));
    yield call(resetAuthHeaders);
    yield call(fetchCurrentUser);
  } catch (error) {
    console.error(error);
    yield put(actions.signupError(error));
  }
}

function* signout() {
  // TODO: Clear store & local data 🔥
  throw 'resetting local storage 😅💣💥';
}

function* resetAuthHeaders() {
  const token = yield select(selectors.getAuthToken);
  graphqlClient.setHeader('authorization', token);
}

function* authenticationSaga() {
  yield takeEvery(FETCH_CURRENT_USER.START, fetchCurrentUser);
  yield takeEvery(SIGNIN.START, signin);
  yield takeEvery(SIGNUP.START, signup);
  yield takeEvery(SIGNOUT, signout);
  yield takeEvery(RESET_AUTH_HEADERS, resetAuthHeaders);
}

export default authenticationSaga;
