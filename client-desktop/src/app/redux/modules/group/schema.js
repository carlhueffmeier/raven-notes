import { schema } from 'normalizr';

const userSchema = new schema.Entity('users');
const groupSchema = new schema.Entity('groups', {
  members: [userSchema]
});

const createGroupResponseSchema = {
  createGroup: groupSchema
};

export { createGroupResponseSchema };
