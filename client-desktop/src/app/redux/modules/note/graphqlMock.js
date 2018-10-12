const ALL_NOTES_QUERY = `
  query allNotes {
    notes {
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

const CREATE_NOTE_MUTATION = `
  mutation createNote($body: String) {
    createNote(data: {body: $body, author: { connect: {id: "cjn5pv4vkjqgw0932trypskwh"}}}) {
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
    updateNote(where: {id: $id} data: {body: $body}) {
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
