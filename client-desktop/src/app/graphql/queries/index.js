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

const GET_GROUP_NOTES = gql`
  {
    groups {
      name
      id
      notes {
        id
        title
        body
        author {
          userName
        }
      }
    }
  }
`

const GET_CURRENT_GROUP_NOTES = gql`
  {
    groups @client {
      name
      id
      notes {
        id
        title
        body
        author {
          userName
        }
      }
    }
  }
`

export {
  GET_NOTES_FROM_SERVER,
  GET_CURRENT_NOTE,
  GET_GROUP_NOTES,
  GET_CURRENT_GROUP_NOTES
};
