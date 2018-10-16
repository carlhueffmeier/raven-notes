const { gql } = require('apollo-server-express');

exports.typeDef = gql`
  extend type Query {
    group(where: GroupWhereUniqueInput): Group!
    allGroups(where: GroupWhereInput): [Group]!
  }

  extend type Mutation {
    createGroup(data: GroupCreateInput!): Group!
    updateGroup(where: GroupWhereUniqueInput!, data: GroupUpdateInput!): Group!
  }

  type Group {
    id: ID!
    name: String!
    members: [User!]!
    admins: [User!]!
    notes: [Note!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input GroupUpdateInput {
    name: String
  }

  input GroupCreateInput {
    name: String!
  }

  input GroupWhereUniqueInput {
    id: ID!
  }

  input GroupWhereInput {
    admin: ID
    member: ID
  }
`;

const getGroup = (_, { where }, { db }) => {
  return db.group.findOne(where);
};

const allGroups = async (_, { where = {} }, { db }) => {
  return db.group.find(where);
};

const createGroup = (_, { data }, { db }) => {
  return db.group.create(data);
};

const updateGroup = (_, { where, data }, { db }) => {
  return db.group.findOneAndUpdate(where, data);
};

const getMembers = async (group, _, { db }) => {
  return db.group.getMembers(group.id);
};

const getAdmins = async (group, _, { db }) => {
  return db.group.getAdmins(group.id);
};

exports.resolvers = {
  Query: {
    group: getGroup,
    allGroups
  },

  Mutation: {
    createGroup,
    updateGroup
  },

  Group: {
    members: getMembers,
    admins: getAdmins
  }
};
