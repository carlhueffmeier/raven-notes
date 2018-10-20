import { selectors as noteSelectors } from '../../modules/note';

function getModuleState(state) {
  return state.ui.currentNote;
}

function getCurrentNoteId(state) {
  return getModuleState(state).id;
}

function getCurrentNote(state) {
  const currentNoteId = getCurrentNoteId(state);
  if (!currentNoteId) {
    return null;
  }
  return noteSelectors.getNoteById(state, currentNoteId);
}

function getCurrentNoteIsDirty(state) {
  return getModuleState(state).dirty;
}

export { getCurrentNote, getCurrentNoteId, getCurrentNoteIsDirty };
