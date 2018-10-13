import { denormalize } from 'normalizr';
import { note as noteSchema } from './schema';
import { getRawEntities } from '../../../lib/reduxUtils';

function getModuleState(state) {
  return state.entities.notes;
}

function getAllNotesWithAuthor(state) {
  const notes = getModuleState(state);
  const denormalizedNotes = denormalize(notes.allIds, [noteSchema], getRawEntities(state.entities));
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

export { getAllNotesWithAuthor, getNoteById, getLoading, getError };
