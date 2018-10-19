import themeReducer from './reducers';
import * as constants from './constants';
import * as actions from './actions';

const initAction = { type: '__INIT__' };

describe('theme reducer', () => {
  it('is light theme by default', () => {
    const nextState = themeReducer(undefined, initAction);
    expect(nextState).toBe(constants.DEFAULT_THEME_LIGHT);
  });
  
  it('it turns on dark mode on toggle', () => {
    const firstState = themeReducer(undefined, initAction);
    const toggleAction = actions.toggleDarkMode();
    const stateAfterToggle = themeReducer(firstState, toggleAction);
    expect(stateAfterToggle).toBe(constants.DEFAULT_THEME_DARK);
  });
});
