const { gql } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

exports.typeDef = gql`
  scalar DateTime
`;

exports.resolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Date custom scalar type',
    // Value from the client
    parseValue(value) {
      return new Date(value).toISOString();
    },
    // Value sent to the client
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value).toISOString();
      }
      return null;
    }
  })
};
