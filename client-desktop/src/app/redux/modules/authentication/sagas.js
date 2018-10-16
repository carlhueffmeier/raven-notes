import { call, put, takeEvery } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import graphqlClient from '../../../api/graphqlClient';
import * as actions from './actions';
import { FETCH_CURRENT_USER, SIGNIN, SIGNUP, SIGNOUT } from './types';
import { CURRENT_USER_QUERY, SIGNIN_MUTATION, SIGNUP_MUTATION } from './graphql';
import { fetchCurrentUserResponseSchema, currentUserSchema } from './schema';

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
    const { token, user } = response.signin;
    graphqlClient.setHeader('authorization', token);
    const normalizedData = normalize(user, currentUserSchema);
    yield put(actions.signinSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.signinError(error));
  }
}

function* signup(action) {
  try {
    const signupInfo = action.payload;
    const response = yield call([graphqlClient, 'request'], SIGNUP_MUTATION, signupInfo);
    const { token, user } = response.signup;
    graphqlClient.setHeader('authorization', token);
    const normalizedData = normalize(user, currentUserSchema);
    yield put(actions.signupSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.signupError(error));
  }
}

function* signout() {
  graphqlClient.setHeader('authorization', '');
  // TODO: Clear store 🔥
  yield put('__TODO__ CLEAR STORE');
}

function* authenticationSaga() {
  yield takeEvery(FETCH_CURRENT_USER.START, fetchCurrentUser);
  yield takeEvery(SIGNIN.START, signin);
  yield takeEvery(SIGNUP.START, signup);
  yield takeEvery(SIGNOUT, signout);
}

export default authenticationSaga;
