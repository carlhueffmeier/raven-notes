import { schema } from 'normalizr';

const userSchema = new schema.Entity('users');

const groupSchema = new schema.Entity('groups', {
  members: [userSchema]
});

const noteSchema = new schema.Entity('notes', {
  author: userSchema,
  group: groupSchema
});

const fetchNotesResponseSchema = {
  allNotes: [noteSchema]
};

const createNoteResponseSchema = {
  createNote: noteSchema
};

const updateNoteResponseSchema = {
  updateNote: noteSchema
};

// 🔥 TODO: Remove 🔥
const MOCK__fetchNotesResponseSchema = {
  allNotes: [noteSchema]
};

export {
  noteSchema,
  fetchNotesResponseSchema,
  createNoteResponseSchema,
  updateNoteResponseSchema,
  MOCK__fetchNotesResponseSchema
};
