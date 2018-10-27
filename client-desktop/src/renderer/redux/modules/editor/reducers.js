import { UPDATE_EDITOR_CONTENT } from './types';
import { createEmptyEditorValue } from '../../../lib/editorUtils';

function rootReducer(state = createEmptyEditorValue(), action) {
  switch (action.type) {
    case UPDATE_EDITOR_CONTENT: {
      const newContent = action.payload;
      return newContent;
    }
    default:
      return state;
  }
}

export default rootReducer;
