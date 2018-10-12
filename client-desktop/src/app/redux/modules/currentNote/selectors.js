import { selectors as noteSelectors } from '../../modules/note';

function getEntity(state) {
  return state.ui.currentNote;
}

function getCurrentNote(state) {
  const currentNoteId = getEntity(state).id;
  if (!currentNoteId) {
    return null;
  }
  return noteSelectors.getNoteById(state, currentNoteId);
}

function getCurrentNoteIsDirty(state) {
  return getEntity(state).dirty;
}

export { getCurrentNote, getCurrentNoteIsDirty };
