const createUserModel = require('./modelFactories/user');
const createNoteModel = require('./modelFactories/note');
const createGroupModel = require('./modelFactories/group');

function generateModels({ user }) {
  return {
    user: createUserModel({ user }),
    note: createNoteModel({ user }),
    group: createGroupModel({ user })
  };
}

module.exports = generateModels;
