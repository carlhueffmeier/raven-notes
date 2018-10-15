const { ApolloServer, gql } = require('apollo-server-express');
const merge = require('lodash.merge');
const generateModels = require('./db/generateModels');

// Import type definitions and resolvers for custom scalar types
const { typeDef: DateTime, resolvers: dateTimeResolvers } = require('./graphql/scalars/dateTime');
const { typeDef: JsonType, resolvers: jsonResolvers } = require('./graphql/scalars/json');

// Import type definitions and resolvers for entities
const { typeDef: Group, resolvers: groupResolvers } = require('./graphql/entities/group');
const { typeDef: Note, resolvers: noteResolvers } = require('./graphql/entities/note');
const { typeDef: User, resolvers: userResolvers } = require('./graphql/entities/user');

// These are the queries and mutations not associated with a type
// Empty for now!
const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

// Put the request and response objects into the context
// As well as generate the database models based on the
// current user
function createContext({ req, res }) {
  return {
    db: generateModels({ user: req.user }),
    req,
    res
  };
}

// == Putting everything together ==
// The ApolloServer constructor conveniently takes an array of
// type definitions.
// For the resolvers, we have to combine them via object deep merge.
const apolloServer = new ApolloServer({
  typeDefs: [Query, Mutation, DateTime, JsonType, Group, Note, User],
  resolvers: merge(
    resolvers,
    dateTimeResolvers,
    jsonResolvers,
    groupResolvers,
    noteResolvers,
    userResolvers
  ),
  context: createContext
});

module.exports = apolloServer;
