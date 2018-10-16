import { schema } from 'normalizr'

const user = new schema.Entity('users');
const group = new schema.Entity('groups', {
  members: [user]
});

export { group }