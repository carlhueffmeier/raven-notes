const { AuthenticationError } = require('apollo-server-express');
const db = require('../orm');

function createGroupModel({ user } = {}) {
  return {
    create,
    findOne,
    findOneAndUpdate
  };

  async function create(data) {
    const newGroup = db.group.build(data);
    newGroup.addAdmins([user.id]);
    return newGroup.save();
  }

  async function findOne(where) {
    return db.group.findOne({ where });
  }

  async function findOneAndUpdate(where, update) {
    const existingGroup = db.note.findOne({ where });
    // TODO: What is this returning? Check whether user is authorized to make changes.
    console.log(
      'trying to apply updates to group',
      update,
      'need to check rights',
      existingGroup.getAdmins()
    );
    throw new AuthenticationError('You are not authorized to change this note');
  }
}

module.exports = createGroupModel;
