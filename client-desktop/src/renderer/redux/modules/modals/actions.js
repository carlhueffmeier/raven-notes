import * as types from './types';

const toggleAddGroupModal = on => ({
  type: types.TOGGLE_ADD_GROUP_MODAL,
  payload: on
});

const toggleAddMemberModal = on => ({
  type: types.TOGGLE_ADD_MEMBER_MODAL,
  payload: on
});

const toggleGroupSettingsModal = on => ({
  type: types.TOGGLE_GROUP_SETTINGS_MODAL,
  payload: on
});

export { toggleAddGroupModal, toggleAddMemberModal, toggleGroupSettingsModal };
