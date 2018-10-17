const GROUP_DETAILS_FRAGMENT = `
  id
  name
  members {
    id
    name
    email
  }
`;

const CREATE_GROUP_MUTATION = `
mutation createGroup($name: String!) {
  createGroup(
    data: {
      name: $name
    }
  ) {
    ${GROUP_DETAILS_FRAGMENT}
  }
}
`;

const ADD_MEMBER_MUTATION = `
mutation addMemberToGroup($groupId: ID!, $email: String!) {
  addMemberToGroup(
    where: {
      id: $groupId
    }
    data: {
      email: $email
    }
  ) {
    ${GROUP_DETAILS_FRAGMENT}
  }
}
`;

export { CREATE_GROUP_MUTATION, ADD_MEMBER_MUTATION };
