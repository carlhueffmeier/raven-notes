import * as types from './types';

const selectGroup = id => ({
  type: types.SELECT_CURRENT_GROUP,
  payload: id
});
const resetCurrentGroup = () => ({
  type: types.RESET_CURRENT_GROUP
});

export { selectGroup, resetCurrentGroup };
