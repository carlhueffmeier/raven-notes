import { schema } from 'normalizr';

const user = new schema.Entity('users');

const note = new schema.Entity('notes', {
  author: user
});

export { note };
