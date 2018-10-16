import { call, put, takeEvery } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import graphqlClient from '../../../api/graphqlClient';
import * as actions from './actions';
import { CREATE_GROUP } from './types';
// import { CREATE_GROUP_MUTATION } from './graphql';
import { CREATE_GROUP_MUTATION } from './graphqlMock';
import { group as groupSchema } from './schema';

// const POLL_INTERVAL = 1000 * 10; // 10s

function* createGroup(action) {
  try {
    const { payload: name } = action;
    const response = yield call([graphqlClient, 'request'], CREATE_GROUP_MUTATION, { name });
    // ⚠️ Caution: Necessary change for local server
    const normalizedData = normalize(response.createGroup, groupSchema);
    yield put(actions.createGroupSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.createGroupError(error));
  }
}

function* groupSaga() {
  yield takeEvery(CREATE_GROUP.START, createGroup);
  // yield spawn(pollFetchGroups);
}

export default groupSaga;
