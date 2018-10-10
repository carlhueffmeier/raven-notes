import gql from 'graphql-tag';

const POST_CURRENT_NOTE = gql`
  mutation PostCurrentNote ($body: String!) {
    currentNote (body: $body) @client {
      id
      body
    }
  }
`
const POST_NOTES_TO_SERVER = gql`
  mutation ($id: ID!, $body: String) {
    updateNote (
      where: {id: $id},
      data: {body: $body}) {
      id
      body
    }
  }`;

export {
  POST_CURRENT_NOTE,
  POST_NOTES_TO_SERVER
};
