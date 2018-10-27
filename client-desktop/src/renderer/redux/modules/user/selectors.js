function getModuleState(state) {
  return state.entities.users;
}

function getUserById(state, id) {
  const users = getModuleState(state);
  return users.byId[id];
}

export { getUserById };
