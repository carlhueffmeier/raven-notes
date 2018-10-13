const { gql, AuthenticationError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const { asyncRandomBytes, storeUserInCookie } = require('../../lib/utils');
const { sendResetMail } = require('../../lib/mail');

exports.typeDef = gql`
  extend type Query {
    me: User
  }

  extend type Mutation {
    signup(data: UserSignupInput!): User!
    signin(data: UserSigninInput!): User!
    signout: SuccessMessage
    requestReset(data: UserRequestResetInput!): SuccessMessage
    resetPassword(data: UserResetPasswordInput!): User
  }

  type User {
    id: ID!
    email: String!
    name: String!
    groups: [Group!]!
  }

  type SuccessMessage {
    message: String
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

const signup = async (_, { data: { email, password, name } }, { db, res }) => {
  // Create new user
  const newUser = await db.user.create({
    email: email,
    password: await bcrypt.hash(password, 10),
    name: name,
    permissions: ['USER']
  });
  // Authenticate right away
  storeUserInCookie(newUser, res);
  return newUser;
};

const signin = async (_, { data: { email, password } }, { db, res }) => {
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
  // Give the user a cookie to identify for future requests 🍪
  storeUserInCookie(user, res);
  return user;
};

const signout = (_, __, { res }) => {
  res.clearCookie('token');
  return { message: 'Goodbye 👋' };
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

const resetPassword = async (
  _,
  { data: { resetToken, password, confirmPassword } },
  { db, res }
) => {
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
  storeUserInCookie(user, res);
  return updatedUser;
};

exports.resolvers = {
  Query: {
    me
  },

  Mutation: {
    signup,
    signin,
    signout,
    requestReset,
    resetPassword
  }
};
