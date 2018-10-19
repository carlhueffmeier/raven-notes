const db = require('../orm');

function createUserModel() {
  return {
    create,
    findOne,
    findOneAndUpdate,
    getMemberOf,
    getAdminOf
  };

  async function create(data) {
    const newUser = await db.user.create(data);
    return newUser;
  }

  async function findOne(where = {}) {
    const foundUser = await db.user.findOne({ where });
    return foundUser;
  }

  async function findOneAndUpdate(where, update) {
    const foundUser = await db.user.findOne({ where });
    await foundUser.update(update);
    return foundUser;
  }

  async function getMemberOf(userId) {
    const foundUser = await db.user.findOne({ where: { id: userId } });
    return foundUser.getMemberOf();
  }

  async function getAdminOf(userId) {
    const foundUser = await db.user.findOne({ where: { id: userId } });
    return foundUser.getAdminOf();
  }
}

module.exports = createUserModel;
