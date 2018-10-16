const CURRENT_USER_FRAGMENT = `
  name
  id
  email
  memberOf {
    id
    name
    members {
      id
      name
      email
    }
  }
`;

const CURRENT_USER_QUERY = `
  query me {
    me {
      ${CURRENT_USER_FRAGMENT}
    }
  }
`;

const SIGNIN_MUTATION = `
  mutation signin($email: String!, $password: String!) {
    signin(data: { email: $email, password: $password }) {
      token
    }
  }
`;

const SIGNUP_MUTATION = `
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(data: { name: $name, email: $email, password: $password }) {
      token
    }
  }
`;

export { CURRENT_USER_QUERY, SIGNIN_MUTATION, SIGNUP_MUTATION };
