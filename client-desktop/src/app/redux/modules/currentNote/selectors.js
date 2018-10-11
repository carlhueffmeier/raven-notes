import { selectors as noteSelectors } from '../../modules/note';

function getCurrentNote(state) {
  const currentNote = state.ui.currentNote;
  if (!currentNote) {
    return null;
  }
  return noteSelectors.getNoteById(state, currentNote);
}

export { getCurrentNote };
