const CREATE_GROUP_MUTATION = `
mutation createGroup($name: String!) {
  createGroup(
    data: {
      name: $name
    }
  ) {
    id
    name
    members {
      id
      name
      email
    }
  }
}
`;

export { CREATE_GROUP_MUTATION }