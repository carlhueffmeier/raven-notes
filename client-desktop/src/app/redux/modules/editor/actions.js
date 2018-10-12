import * as types from './types';

const updateEditorContent = payload => ({
  type: types.UPDATE_EDITOR_CONTENT,
  payload
});

export { updateEditorContent };
