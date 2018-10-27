import {
  TWO_COLUMN_LAYOUT,
  THREE_COLUMN_LAYOUT,
  ONE_COLUMN_LAYOUT
} from './modules/layout/constants';

const schema = {
  entities: {
    notes: {
      1: {
        id: 1,
        body: 'First note 👌'
      }
    },
    users: {
      1: {
        id: 1,
        name: 'Bob',
        email: 'bob@cool.com'
      }
    },
    groups: {
      1: {
        id: 1,
        name: 'Raven Dev',
        notes: [1, 2, 3]
      }
    }
  },
  // Later... 🤗
  // localChanges: {
  //   notes: {
  //     1: {
  //       id: 1,
  //       body: 'Modified first note 🕺',
  //       group: 1
  //     },
  //     5: {
  //       id: 1,
  //       body: 'Modified first note 🕺',
  //       group: 1
  //     },
  //   }
  // },
  ui: {
    currentNote, // ID
    // selector: currentGroupNotes
    currentGroup, // ID
    editor: {
      content // Internal slate editor representation
    },
    layout // ONE_COLUMN_LAYOUT | TWO_COLUMN_LAYOUT | THREE_COLUMN_LAYOUT
  },
  authorization: {
    me: {
      id: 1,
      privateGroup: 1
    } // null
  }
};
