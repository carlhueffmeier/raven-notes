import { schema } from 'normalizr';

const user = new schema.Entity('users');
const group = new schema.Entity('groups', {
  members: [user]
});

const note = new schema.Entity('notes', {
  author: user,
  group: group
});

export { note };
