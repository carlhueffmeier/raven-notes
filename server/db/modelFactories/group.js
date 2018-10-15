const { AuthenticationError } = require('apollo-server-express');
const db = require('../orm');

function createGroupModel({ user } = {}) {
  return {
    create,
    findOne,
    findOneAndUpdate
  };

  async function create(data) {
    const newGroup = await db.group.create(data);
    newGroup.addAdmins([user.id]);
    newGroup.addMembers([user.id]);
    return newGroup.save();
  }

  async function findOne(where) {
    return db.group.findOne({
      where,
      include: [
        {
          model: db.user,
          as: 'members'
        },
        {
          model: db.user,
          as: 'admins'
        }
      ]
    });
  }

  async function findOneAndUpdate(where, update) {
    const existingGroup = await db.group.findOne({ where });
    // Check whether user is admin of group
    const isAllowedToModify = existingGroup && (await existingGroup.hasAdmin(user));
    if (!isAllowedToModify) {
      throw new AuthenticationError('You are not authorized to change group details');
    }
    existingGroup.update(update);
    return existingGroup.save();
  }
}

module.exports = createGroupModel;
