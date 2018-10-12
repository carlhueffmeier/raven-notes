const schema = {
  entities: {
    notes: noteReducer
    // users: userReducer,
    // groups: groupReducer
  },
  ui: {
    currentNote: currentNoteReducer,
    // currentGroup: currentGroupReducer,
    editor: editorReducer,
    layout: layoutReducer
  },
  authorization: {
    me // current user
  }
};
