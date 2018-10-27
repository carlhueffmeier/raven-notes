import * as themes from '../../../themes';
import { DEFAULT_THEME_LIGHT, DEFAULT_THEME_DARK } from './constants';

const themeIndex = {
  [DEFAULT_THEME_LIGHT]: themes.lightTheme,
  [DEFAULT_THEME_DARK]: themes.darkTheme
};

function getCurrentThemeId(state) {
  return state.ui.theme;
}

function getCurrentTheme(state) {
  const themeId = getCurrentThemeId(state);
  return themeIndex[themeId];
}

export { getCurrentTheme };
