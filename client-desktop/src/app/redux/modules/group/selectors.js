function getModuleState(state) {
  return state.entities.groups;
}

function getAllGroups(state) {
  const groups = getModuleState(state);
  return groups.allIds.map(id => groups.byId[id]);
}

export { getAllGroups };
