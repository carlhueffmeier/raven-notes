import { selectors as groupSelectors } from '../../modules/group';

function getModuleState(state) {
  return state.ui.currentGroup;
}

function getCurrentGroupId(state) {
  return getModuleState(state).id;
}

function getCurrentGroup(state) {
  const currentGroupId = getCurrentGroupId(state);
  if (!currentGroupId) {
    return null;
  }
  return groupSelectors.getGroupById(state, currentGroupId);
}

export { getCurrentGroup, getCurrentGroupId };
