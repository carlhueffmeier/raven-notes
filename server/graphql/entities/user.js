const { gql, AuthenticationError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const { asyncRandomBytes, generateToken } = require('../../lib/utils');
const { sendResetMail } = require('../../lib/mail');

exports.typeDef = gql`
  extend type Query {
    me: User
  }

  extend type Mutation {
    signup(data: UserSignupInput!): UserSigninResponse
    signin(data: UserSigninInput!): UserSigninResponse
    requestReset(data: UserRequestResetInput!): SuccessMessage
    resetPassword(data: UserResetPasswordInput!): UserSigninResponse
  }

  type SuccessMessage {
    message: String
  }

  type User {
    id: ID!
    email: String!
    name: String!
    adminOf: [Group!]!
    memberOf: [Group!]!
  }

  type UserSigninResponse {
    token: String
    user: User
  }

  input UserSignupInput {
    email: String!
    name: String!
    password: String!
  }

  input UserSigninInput {
    email: String!
    password: String!
  }

  input UserRequestResetInput {
    email: String!
  }

  input UserResetPasswordInput {
    resetToken: String!
    password: String!
    confirmPassword: String!
  }
`;

const me = (_, __, { req }) => {
  return req.user;
};

const signup = async (_, { data: { email, name, password } }, { db }) => {
  // Create new user
  const newUser = await db.user.create({
    email,
    name,
    password: await bcrypt.hash(password, 10)
  });
  await db.group.create(
    {
      name: 'My first workspace 🎊'
    },
    newUser
  );
  // Authenticate right away
  const token = generateToken(newUser);
  return {
    token,
    user: newUser
  };
};

const signin = async (_, { data: { email, password } }, { db }) => {
  // Look for user by email
  const user = await db.user.findOne({
    email: email.toLowerCase()
  });
  if (!user) {
    throw new AuthenticationError(`No user found for email ${email}.`);
  }
  // Compare whether the password matches the stored hash
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new AuthenticationError(`Invalid password.`);
  }
  // Give the user a token to identify for future requests 🏅
  const token = generateToken(user);
  return {
    token,
    user
  };
};

const requestReset = async (_, { data: { email } }, { db }) => {
  const user = await db.user.findOne({ email });
  if (!user) {
    throw new AuthenticationError(`No user found for email ${email}.`);
  }
  // Create reset token and store in database
  const resetToken = (await asyncRandomBytes(20)).toString('hex');
  const resetTokenExpiry = Date.now() + 1000 * 60 * 60; // expire 1 hour from now
  await db.user.findOneAndUpdate({ id: user.id }, { resetToken, resetTokenExpiry });
  // 🚚 🎁 Send reset email
  await sendResetMail({ to: user.email, name: user.name, resetToken });
  return { message: 'Mail is on the way!' };
};

const resetPassword = async (_, { data: { resetToken, password, confirmPassword } }, { db }) => {
  if (password !== confirmPassword) {
    throw new AuthenticationError('Passwords do not match.');
  }
  // Find user with the matching reset token
  const user = await db.user.findOne({
    resetToken,
    resetTokenExpiry: { $gte: Date.now() } // filter expired tokens
  });
  if (!user) {
    throw new AuthenticationError('Reset token is either invalid or expired.');
  }
  // Update the password and remove the tokens
  const updatedUser = await db.user.findOneAndUpdate(
    { id: user.id },
    {
      password: await bcrypt.hash(password, 10),
      $unset: { resetToken: '', resetTokenExpiry: '' }
    }
  );
  // Authenticate right away
  const token = generateToken(user);
  return {
    token,
    user: updatedUser
  };
};

const memberOf = async (user, _, { db }) => {
  return db.user.getMemberOf(user.id);
};

const adminOf = async (user, _, { db }) => {
  return db.user.getAdminOf(user.id);
};

exports.resolvers = {
  Query: {
    me
  },

  Mutation: {
    signup,
    signin,
    requestReset,
    resetPassword
  },

  User: {
    adminOf,
    memberOf
  }
};
