const ALL_NOTES_QUERY = `
  id
  body
  author {
    id
    email
    name
  }
  group {
    id
    name
    members {
      id
      email
      name
    }
  }
`;

const CREATE_NOTE_MUTATION = `
  mutation createNote($body: String) {
    createNote(data: {body: $body}) {
      id
      body
      author {
        id
        email
        name
      }
    }
  }
`;

const UPDATE_NOTE_MUTATION = `
  mutation updateNote($id: ID!, $body: String) {
    updateNote(data: {id: $id, body: $body}) {
      id
      body
      author {
        id
        email
        name
      }
    }
  }
`;

export { ALL_NOTES_QUERY, CREATE_NOTE_MUTATION, UPDATE_NOTE_MUTATION };
