const { AuthenticationError } = require('apollo-server-express');
const db = require('../orm');

function createNoteModel({ user } = {}) {
  return {
    create,
    find,
    findOne,
    findOneAndUpdate
  };

  async function create({ contentText, contentJson, group } = {}) {
    if (!user) {
      throw new AuthenticationError('You have to authenticate to execute this query');
    }
    // Check whether user is member of group
    const isAllowedToPost = user && (await user.hasMemberOf([group]));
    if (!isAllowedToPost) {
      throw new AuthenticationError('You are not authorized to post in this group');
    }
    const newNote = await db.note.create({
      contentText: contentText,
      contentJson: contentJson
    });
    // Set the author to the current user
    newNote.setAuthor(user.id);
    if (group) {
      newNote.setGroup(group);
    } else {
      // Set private
    }
    return newNote.save();
  }

  async function find({ author, group } = {}) {
    if (!user) {
      throw new AuthenticationError('You have to authenticate to execute this query');
    }
    // Restrict notes to those that belong to groups
    // that the user is a member of
    const where = {
      '$group.members.id$': user.id
    };
    // Filter by author if specified
    if (author) {
      where['authorId'] = author;
    }
    // Filter by group if specified
    if (group) {
      where['groupId'] = group;
    }

    return db.note.findAll({
      where,
      include: [
        {
          // Join with group
          model: db.group,
          as: 'group',
          // Also get a list of all members
          include: [
            {
              model: db.user,
              as: 'members'
            }
          ]
        }
      ]
    });
  }

  async function findOne({ id: noteId } = {}) {
    if (!user) {
      throw new AuthenticationError('You have to authenticate to execute this query');
    }
    // Restrict notes to those that belong to groups
    // that the user is a member of
    const where = {
      id: noteId,
      '$group.members.id$': user.id
    };
    return db.note.findOne({
      where,
      include: [
        {
          // Join with group
          model: db.group,
          as: 'group',
          // Also get a list of all members
          include: [
            {
              model: db.user,
              as: 'members'
            }
          ]
        }
      ]
    });
  }

  async function findOneAndUpdate({ id: noteId } = {}, update) {
    if (!user) {
      throw new AuthenticationError('You have to authenticate to execute this query');
    }
    const where = { id: noteId };
    const existingNode = await db.note.findOne({ where });
    if (existingNode.authorId !== user.id) {
      throw new AuthenticationError('Only the author can edit this note');
    }
    return existingNode.update(update);
  }
}

module.exports = createNoteModel;
