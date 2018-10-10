import gql from 'graphql-tag';
import { POST_CURRENT_NOTE, POST_NOTES_TO_CACHE } from '../mutations'

const resolvers = {
  Mutation: {
    currentNote: (_, { body }, { cache }) => {
      const query = POST_CURRENT_NOTE
      cache.writeData({ query, data: { currentNote: body } });
      return null;
    },
    updateNote: (_, { body }, { cache }) => {
      const query = POST_NOTES_TO_CACHE
      cache.writeData({ query, data: { updateNote: body } });
      return null;
    }
  }
}

export default resolvers;
