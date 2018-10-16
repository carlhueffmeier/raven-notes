import { schema } from 'normalizr';

const userSchema = new schema.Entity('users');

const groupSchema = new schema.Entity('groups', {
  members: [userSchema]
});

const currentUserSchema = new schema.Entity('users', {
  memberOf: [groupSchema]
});

const fetchCurrentUserResponseSchema = {
  me: currentUserSchema
};

const signinResponseSchema = {
  user: currentUserSchema
};

export { currentUserSchema, fetchCurrentUserResponseSchema, signinResponseSchema };
