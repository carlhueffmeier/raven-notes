import gql from 'graphql-tag';

const POST_CURRENT_NOTE = gql`
  mutation ($body: String!) {
    currentNote (body: $body) @client {
      id
      body
    }
  }
`
const POST_NOTES_TO_CACHE = gql`
mutation ($body: String!) {
  updateNote (body: $body) @client {
    id
    body
  }
}`

export {
  POST_CURRENT_NOTE,
  POST_NOTES_TO_CACHE
};
