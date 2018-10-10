const { gql } = require('apollo-server-express');

exports.typeDef = gql`
  extend type Query {
    note(where: NoteWhereUniqueInput): Note!
    allNotes(where: NoteWhereInput): [Note]!
  }

  extend type Mutation {
    createNote(data: NoteCreateInput!): Note!
    updateNote(data: NoteUpdateInput!): Note!
  }

  type Note {
    id: ID!
    author: User!
    body: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input NoteUpdateInput {
    id: ID!
    body: String
  }

  input NoteCreateInput {
    body: String!
  }

  input NoteWhereUniqueInput {
    id: ID
  }

  input NoteWhereInput {
    author: ID
  }
`;

const getNote = (_, { where = {} }, { db }) => {
  return db.note.findOne(where);
};

const allNotes = async (_, { where = {} }, { db }) => {
  return db.note.find(where);
};

const createNote = (_, { data }, { db }) => {
  return db.note.create(data);
};

const updateNote = (_, { data }, { db }) => {
  const { id, ...update } = data;
  return db.note.findOneAndUpdate({ id }, update);
};

exports.resolvers = {
  Query: {
    note: getNote,
    allNotes
  },

  Mutation: {
    createNote,
    updateNote
  }
};
