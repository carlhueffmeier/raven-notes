import { selectors as noteSelectors } from '../../modules/note';

function getModuleState(state) {
  return state.ui.currentNote;
}

function getCurrentNote(state) {
  const currentNoteId = getModuleState(state).id;
  if (!currentNoteId) {
    return null;
  }
  return noteSelectors.getNoteById(state, currentNoteId);
}

function getCurrentNoteIsDirty(state) {
  return getModuleState(state).dirty;
}

export { getCurrentNote, getCurrentNoteIsDirty };
