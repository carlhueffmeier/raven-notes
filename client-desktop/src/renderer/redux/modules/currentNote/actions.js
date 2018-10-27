import * as types from './types';

const selectNote = id => ({
  type: types.SELECT_CURRENT_NOTE,
  payload: id
});
const resetCurrentNote = () => ({
  type: types.RESET_CURRENT_NOTE
});

export { selectNote, resetCurrentNote };
