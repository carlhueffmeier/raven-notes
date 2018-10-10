import gql from 'graphql-tag';

const GET_NOTES_FROM_SERVER = gql`
  {
    notes {
      id
      title
      body
      createdAt
      author {
        firstName
        lastName
        userName
      }
    }
  }`;

const GET_CURRENT_NOTE = gql`
  {
    currentNote @client {
      body
    }
  }
`;

export {
  GET_NOTES_FROM_SERVER,
  GET_CURRENT_NOTE,
};
