const { gql } = require('apollo-server-express');

exports.typeDef = gql`
  extend type Query {
    note(where: NoteWhereUniqueInput!): Note!
    allNotes(where: NoteWhereInput): [Note]!
  }

  extend type Mutation {
    createNote(data: NoteCreateInput!): Note!
    updateNote(where: NoteWhereUniqueInput!, data: NoteUpdateInput!): Note!
  }

  type Note {
    id: ID!
    author: User!
    group: Group
    contentText: String
    contentJson: Json
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  # TODO: Support update of group
  input NoteUpdateInput {
    contentText: String
    contentJson: Json
  }

  input NoteCreateInput {
    group: ID
    contentText: String
    contentJson: Json
  }

  input NoteWhereUniqueInput {
    id: ID!
  }

  input NoteWhereInput {
    author: ID
    group: ID
  }
`;

const getNote = (_, { where }, { db }) => {
  return db.note.findOne(where);
};

const allNotes = async (_, { where = {} }, { db }) => {
  return db.note.find(where);
};

const createNote = (_, { data }, { db }) => {
  return db.note.create(data);
};

const updateNote = (_, { where, data }, { db }) => {
  const { id } = where;
  return db.note.findOneAndUpdate({ id }, data);
};

const getAuthor = (note, _, { db }) => {
  const where = { id: note.authorId };
  return db.user.findOne(where);
};

const getGroup = (note, _, { db }) => {
  const where = { id: note.groupId };
  return db.group.findOne(where);
};

exports.resolvers = {
  Query: {
    note: getNote,
    allNotes
  },

  Mutation: {
    createNote,
    updateNote
  },

  Note: {
    author: getAuthor,
    group: getGroup
  }
};
