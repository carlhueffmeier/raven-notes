import { call, put, takeEvery } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import graphqlClient from '../../../api/graphqlClient';
import * as actions from './actions';
import { CREATE_GROUP } from './types';
import { CREATE_GROUP_MUTATION } from './graphql';
import { createGroupResponseSchema } from './schema';

function* createGroup(action) {
  try {
    const { payload } = action;
    const response = yield call([graphqlClient, 'request'], CREATE_GROUP_MUTATION, payload);
    const normalizedData = normalize(response, createGroupResponseSchema);
    yield put(actions.createGroupSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.createGroupError(error));
  }
}

function* groupSaga() {
  yield takeEvery(CREATE_GROUP.START, createGroup);
}

export default groupSaga;
