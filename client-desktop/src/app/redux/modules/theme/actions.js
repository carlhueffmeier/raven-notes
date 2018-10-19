import * as types from './types';

const changeTheme = themeId => ({
  type: types.CHANGE_THEME,
  payload: themeId
});

const toggleDarkMode = () => ({
  type: types.TOGGLE_DARK_MODE
});

export { changeTheme, toggleDarkMode };
