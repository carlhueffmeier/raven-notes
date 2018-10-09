const userStore = {};
const { AuthenticationError } = require('apollo-server-express');

function createUserModel({ user } = {}) {
  return {
    create,
    findOne,
    update
  };

  async function create(data) {
    userStore[data.id] = data;
  }

  async function findOne(where) {
    return userStore[where.id];
  }

  async function update(whereUnique, update) {
    if (!user) {
      throw new AuthenticationError('You are not authorized to update user info');
    }
    userStore[whereUnique.id] = { ...userStore[whereUnique.id], ...update };
    return userStore[whereUnique.id];
  }
}

module.exports = createUserModel;
