const createUserModel = require('./modelFactories/user');

function generateModels({ user }) {
  return {
    user: createUserModel({ user })
  };
}

module.exports = generateModels;
