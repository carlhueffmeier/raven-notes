const db = require('../orm');

function createUserModel() {
  return {
    create,
    findOne,
    findOneAndUpdate
  };

  async function create(data) {
    return db.user.create(data);
  }

  async function findOne(where) {
    return db.user.findOne({ where });
  }

  async function findOneAndUpdate(where, update) {
    const [_affectedCount, affectedRows] = await db.user.update(update, { where });
    return affectedRows[0];
  }
}

module.exports = createUserModel;
