const { gql } = require('apollo-server-express');
const GraphQLJson = require('graphql-type-json');

exports.typeDef = gql`
  scalar Json
`;

exports.resolvers = {
  Json: GraphQLJson
};
