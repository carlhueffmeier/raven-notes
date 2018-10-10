import gql from 'graphql-tag';

const POST_CURRENT_NOTE = gql`
  mutation PostCurrentNote ($body: String!) {
    currentNote (body: $body) @client {
      body
    }
  }
`
const POST_NOTES_TO_SERVER = gql`
  mutation PostNotesToServer ($body: String!) {
    postNotes (body: $body) {
      body
    }
  }`;

export {
  POST_CURRENT_NOTE,
  POST_NOTES_TO_SERVER
};
