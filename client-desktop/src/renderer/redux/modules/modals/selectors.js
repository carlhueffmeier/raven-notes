function getModuleState(state) {
  return state.ui.modals;
}

function getAddGroupModalVisible(state) {
  return getModuleState(state).addGroupModalVisible;
}

function getAddMemberModalVisible(state) {
  return getModuleState(state).addMemberModalVisible;
}

function getGroupSettingsModalVisible(state) {
  return getModuleState(state).groupSettingsModalVisible;
}

export { getAddGroupModalVisible, getAddMemberModalVisible, getGroupSettingsModalVisible };
