function getModuleState(state) {
  return state.entities.groups;
}

function getAllGroups(state) {
  const groups = getModuleState(state);
  return groups.allIds.map(id => groups.byId[id]);
}

function getGroupById(state, id) {
  const groups = getModuleState(state);
  return groups.byId[id];
}

function getLoading(state) {
  return getModuleState(state).loading;
}

function getError(state) {
  return getModuleState(state).error;
}

export { getAllGroups, getGroupById, getLoading, getError };
