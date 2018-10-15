const NOTE_FRAGMENT = `
    id
    contentJson
    contentText
    createdAt
    updatedAt
    author {
      id
      email
      name
      privateGroup {
        id
      }
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

const ALL_NOTES_QUERY = `
  query allNotes {
    notes {
      ${NOTE_FRAGMENT}
    }
  }
`;

const CREATE_NOTE_MUTATION = `
  mutation createNote($contentJson: Json, $contentText: String, $groupId: ID!) {
    createNote(
      data: {
        contentText: $contentText,
        contentJson: $contentJson,
        author: { connect: { id: "cjn5pv4vkjqgw0932trypskwh" } },
        group: { connect: { id: $groupId } }
      }
    ) {
      ${NOTE_FRAGMENT}
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
      ${NOTE_FRAGMENT}
    }
  }
`;

export { ALL_NOTES_QUERY, CREATE_NOTE_MUTATION, UPDATE_NOTE_MUTATION };
