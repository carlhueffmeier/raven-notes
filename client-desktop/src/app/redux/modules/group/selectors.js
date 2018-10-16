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

export { getAllGroups, getGroupById };
