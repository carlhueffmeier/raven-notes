const { AuthenticationError } = require('apollo-server-express');
const db = require('../orm');

function createGroupModel({ user } = {}) {
  return {
    create,
    findOne,
    findOneAndUpdate,
    addMember,
    addAdmin,
    getMembers,
    getAdmins
  };

  async function create(data, newUser) {
    if (!user && !newUser) {
      throw new AuthenticationError('You have to authenticate to execute this query');
    }
    const userId = newUser ? newUser.id : user.id;
    const newGroup = await db.group.create(data);
    await newGroup.addAdmins([userId]);
    await newGroup.addMembers([userId]);
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
    if (!user) {
      throw new AuthenticationError('You have to authenticate to execute this query');
    }
    const existingGroup = await db.group.findOne({ where });
    // Check whether user is admin of group
    const isAllowedToModify = existingGroup && (await existingGroup.hasAdmin(user));
    if (!isAllowedToModify) {
      throw new AuthenticationError('You are not authorized to change group details');
    }
    await existingGroup.update(update);
    return existingGroup.save();
  }

  async function addMember(where, newMemberInfo) {
    if (!user) {
      throw new AuthenticationError('You have to authenticate to execute this query');
    }
    // Look up group
    const existingGroup = await db.group.findOne({ where });
    if (!existingGroup) {
      throw new Error('Group not found!');
    }
    // Check whether current user is admin of group
    const isAllowedToModify = existingGroup && (await existingGroup.hasAdmin(user));
    if (!isAllowedToModify) {
      throw new AuthenticationError('You are not authorized to change group details');
    }
    // Look up the new member
    const newMember = await db.user.findOne({ where: newMemberInfo });
    if (!newMember) {
      throw new Error('Could not find any matching users!');
    }
    // Add member to group
    await existingGroup.addMembers([newMember.id]);
    return existingGroup.save();
  }

  async function addAdmin(where, newAdminInfo) {
    if (!user) {
      throw new AuthenticationError('You have to authenticate to execute this query');
    }
    // Look up group
    const existingGroup = await db.group.findOne({ where });
    if (!existingGroup) {
      throw new Error('Group not found!');
    }
    // Check whether current user is admin of group
    const isAllowedToModify = existingGroup && (await existingGroup.hasAdmin(user));
    if (!isAllowedToModify) {
      throw new AuthenticationError('You are not authorized to change group details');
    }
    // Look up the user
    const newAdmin = await db.user.findOne({ where: newAdminInfo });
    if (!newAdmin) {
      throw new Error('Could not find any matching users!');
    }
    // Add user to group as admin
    await existingGroup.addAdmins([newAdmin.id]);
    return existingGroup.save();
  }

  async function getMembers(groupId) {
    const foundGroup = await db.group.findOne({ where: { id: groupId } });
    return foundGroup.getMembers();
  }

  async function getAdmins(groupId) {
    const foundGroup = await db.group.findOne({ where: { id: groupId } });
    return foundGroup.getAdmins();
  }
}

module.exports = createGroupModel;
