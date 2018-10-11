function getNoteEntity(state) {
  return state.entities.notes;
}

function getAllNotes(state) {
  const notes = getNoteEntity(state);
  return notes.allIds.map(id => notes.byId[id]);
}

function getLoading(state) {
  return getNoteEntity(state).loading;
}

function getError(state) {
  return getNoteEntity(state).error;
}

export { getAllNotes, getLoading, getError };
