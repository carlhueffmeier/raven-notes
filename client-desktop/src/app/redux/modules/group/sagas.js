import { call, put, takeEvery } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import graphqlClient from '../../../api/graphqlClient';
import * as actions from './actions';
import { actions as modalsActions } from '../../modules/modals';
import { actions as currentGroupActions } from '../../modules/currentGroup';
import { CREATE_GROUP, ADD_MEMBER } from './types';
import { CREATE_GROUP_MUTATION, ADD_MEMBER_MUTATION } from './graphql';
import { createGroupResponseSchema, addMemberResponseSchema } from './schema';

function* createGroup(action) {
  try {
    const { payload } = action;
    const response = yield call([graphqlClient, 'request'], CREATE_GROUP_MUTATION, payload);
    const normalizedData = normalize(response, createGroupResponseSchema);
    yield put(actions.createGroupSuccess(normalizedData));
    yield put(modalsActions.toggleAddGroupModal(false));
    const newGroupId = normalizedData.result.createGroup;
    yield put(currentGroupActions.selectGroup(newGroupId));
  } catch (error) {
    console.error(error);
    yield put(actions.createGroupError(error));
  }
}

function* addMember(action) {
  try {
    const { payload } = action;
    const response = yield call([graphqlClient, 'request'], ADD_MEMBER_MUTATION, payload);
    const normalizedData = normalize(response, addMemberResponseSchema);
    yield put(actions.addMemberSuccess(normalizedData));
    yield put(modalsActions.toggleAddMemberModal(false));
  } catch (error) {
    console.error(error);
    yield put(actions.addMemberError(error));
  }
}

function* groupSaga() {
  yield takeEvery(CREATE_GROUP.START, createGroup);
  yield takeEvery(ADD_MEMBER.START, addMember);
}

export default groupSaga;
