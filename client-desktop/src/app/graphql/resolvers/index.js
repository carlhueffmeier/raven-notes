import gql from 'graphql-tag';

const resolvers = {
  Mutation: {
    currentNote: (_, { body }, { cache }) => {
      const query = gql`
        query getNote {
          currentNote @client {
            body
          }
        }
      `
      cache.writeData({ query, data: { currentNote: body } });
      return null;
    }
  }
}

export default resolvers;
