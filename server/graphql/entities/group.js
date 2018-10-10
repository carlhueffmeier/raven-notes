const { gql } = require('apollo-server-express');

exports.typeDef = gql`
  extend type Query {
    group(where: GroupWhereUniqueInput): Group!
    allGroups(where: GroupWhereInput): [Group]!
  }

  extend type Mutation {
    createGroup(data: GroupCreateInput!): Group!
    updateGroup(data: GroupUpdateInput!): Group!
  }

  type Group {
    id: ID!
    name: String!
    members: [User!]!
    admins: [User!]!
    notes: [Note!]!
    createdAt: DateTime!
  }

  input GroupUpdateInput {
    id: ID!
    name: String
  }

  input GroupCreateInput {
    name: String!
  }

  input GroupWhereUniqueInput {
    id: ID
  }

  input GroupWhereInput {
    admin: ID
    member: ID
  }
`;

const getGroup = (_, { where = {} }, { db }) => {
  return db.group.findOne(where);
};

const allGroups = async (_, { where = {} }, { db }) => {
  return db.group.find(where);
};

const createGroup = (_, { data }, { db }) => {
  return db.group.create(data);
};

const updateGroup = (_, { data }, { db }) => {
  const { id, ...update } = data;
  return db.group.findOneAndUpdate({ id }, update);
};

exports.resolvers = {
  Query: {
    group: getGroup,
    allGroups
  },

  Mutation: {
    createGroup,
    updateGroup
  }
};
