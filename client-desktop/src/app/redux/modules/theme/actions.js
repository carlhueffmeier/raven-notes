import * as types from './types';

const changeTheme = themeId => ({
  type: types.CHANGE_THEME,
  payload: themeId
});

const toggleDarkMode = themeId => ({
  type: types.TOGGLE_DARK_MODE,
  payload: themeId
});

export { changeTheme, toggleDarkMode };
