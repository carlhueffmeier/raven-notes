import { denormalize } from 'normalizr';
import { noteSchema } from './schema';
import { getRawEntities } from '../../../lib/reduxUtils';
import { selectors as currentGroupSelectors } from '../currentGroup';

function getModuleState(state) {
  return state.entities.notes;
}

function getAllNotesWithAuthor(state) {
  const notes = getModuleState(state);
  const denormalizedNotes = denormalize(notes.allIds, [noteSchema], getRawEntities(state.entities));
  return denormalizedNotes;
}

function getCurrentGroupNotesWithAuthor(state) {
  const currentGroupId = currentGroupSelectors.getCurrentGroupId(state);
  const notes = getModuleState(state);
  const groupNoteIds = Object.entries(notes.byId).reduce(
    (groupNoteIds, [id, note]) =>
      note.group === currentGroupId ? [...groupNoteIds, id] : groupNoteIds,
    []
  );
  const denormalizedNotes = denormalize(groupNoteIds, [noteSchema], getRawEntities(state.entities));
  return denormalizedNotes;
}

function getNoteById(state, id) {
  const notes = getModuleState(state);
  return notes.byId[id];
}

function getLoading(state) {
  return getModuleState(state).loading;
}

function getError(state) {
  return getModuleState(state).error;
}

export { getAllNotesWithAuthor, getCurrentGroupNotesWithAuthor, getNoteById, getLoading, getError };
