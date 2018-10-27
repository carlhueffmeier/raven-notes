import * as types from './types';

// Create new group
const createGroup = payload => ({
  type: types.CREATE_GROUP.START,
  payload
});
const createGroupSuccess = payload => ({
  type: types.CREATE_GROUP.SUCCESS,
  payload
});
const createGroupError = error => ({
  type: types.CREATE_GROUP.ERROR,
  error
});

// Update group
const updateGroup = payload => ({
  type: types.UPDATE_GROUP.START,
  payload
});
const updateGroupSuccess = payload => ({
  type: types.UPDATE_GROUP.SUCCESS,
  payload
});
const updateGroupError = error => ({
  type: types.UPDATE_GROUP.ERROR,
  error
});

// Update group
const addMember = payload => ({
  type: types.ADD_MEMBER.START,
  payload
});
const addMemberSuccess = payload => ({
  type: types.ADD_MEMBER.SUCCESS,
  payload
});
const addMemberError = error => ({
  type: types.ADD_MEMBER.ERROR,
  error
});

export {
  createGroup,
  createGroupSuccess,
  createGroupError,
  updateGroup,
  updateGroupSuccess,
  updateGroupError,
  addMember,
  addMemberSuccess,
  addMemberError
};
