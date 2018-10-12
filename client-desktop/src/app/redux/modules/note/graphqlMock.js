const ALL_NOTES_QUERY = `
  query allNotes {
    notes {
      id
      contentJson
      contentText
      author {
        id
        email
        name
      }
    }
  }
`;

const CREATE_NOTE_MUTATION = `
  mutation createNote($contentJson: Json, $contentText: String) {
    createNote(
      data: {
        contentText: $contentText,
        contentJson: $contentJson,
        author: { connect: { id: "cjn5pv4vkjqgw0932trypskwh" } }
      }
    ) {
      id
      contentJson
      contentText
      author {
        id
        email
        name
      }
    }
  }
`;

const UPDATE_NOTE_MUTATION = `
  mutation updateNote($id: ID!, $contentJson: Json, $contentText: String) {
    updateNote(
      where: {
        id: $id
      }
      data: {
        contentText: $contentText,
        contentJson: $contentJson
      }
    ) {
      id
      contentJson
      contentText
      author {
        id
        email
        name
      }
    }
  }
`;

export { ALL_NOTES_QUERY, CREATE_NOTE_MUTATION, UPDATE_NOTE_MUTATION };
