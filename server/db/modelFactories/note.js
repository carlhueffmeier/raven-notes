const { AuthenticationError } = require('apollo-server-express');
const db = require('../orm');

function createNoteModel({ user } = {}) {
  return {
    create,
    find,
    findOne,
    findOneAndUpdate
  };

  async function create(data) {
    const newNote = db.note.build(data);
    newNote.setAuthor(user.id);
    return newNote.save();
  }

  async function find(where) {
    return db.note.findAll({ where });
  }

  async function findOne(where) {
    return db.note.findOne({ where });
  }

  async function findOneAndUpdate(where, update) {
    const existingNode = db.note.findOne({ where });
    if (user.id !== existingNode.getAuthor().id) {
      throw new AuthenticationError('You are not authorized to change this note');
    }
    return existingNode.update(update);
  }
}

module.exports = createNoteModel;
