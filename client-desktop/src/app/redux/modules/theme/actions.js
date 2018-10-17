import * as types from './types';

const changeTheme = themeId => ({
  type: types.CHANGE_THEME,
  payload: themeId
});

export { changeTheme };
