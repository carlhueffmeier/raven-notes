import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.REACT_APP_GRAPHQL_ENDPOINT, { headers: {} });

export default client;
