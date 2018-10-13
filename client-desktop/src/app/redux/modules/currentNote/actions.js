import * as types from './types';

const selectCurrentNote = payload => ({
  type: types.SELECT_CURRENT_NOTE,
  payload
});
const resetCurrentNote = () => ({
  type: types.RESET_CURRENT_NOTE
});
const updateCurrentNote = () => ({
  type: types.UPDATE_CURRENT_NOTE
});

export { selectCurrentNote, resetCurrentNote, updateCurrentNote };
