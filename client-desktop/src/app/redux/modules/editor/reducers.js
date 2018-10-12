import Plain from 'slate-plain-serializer';
import { UPDATE_EDITOR_CONTENT } from './types';
const initialState = Plain.deserialize('');

function rootReducer(state = initialState, action) {
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
