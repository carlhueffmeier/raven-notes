import * as types from './types';

const changeLayout = payload => ({
  type: types.CHANGE_LAYOUT,
  payload
});

export { changeLayout };
