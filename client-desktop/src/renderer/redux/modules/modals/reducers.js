import { combineReducers } from 'redux';
import {
  TOGGLE_ADD_GROUP_MODAL,
  TOGGLE_ADD_MEMBER_MODAL,
  TOGGLE_GROUP_SETTINGS_MODAL
} from './types';

const rootReducer = combineReducers({
  addGroupModalVisible: createToggleReducer(TOGGLE_ADD_GROUP_MODAL),
  addMemberModalVisible: createToggleReducer(TOGGLE_ADD_MEMBER_MODAL),
  groupSettingsModalVisible: createToggleReducer(TOGGLE_GROUP_SETTINGS_MODAL)
});

function createToggleReducer(type) {
  return function toggleReducer(state = false, action) {
    if (action.type === type) {
      return action.payload;
    }
    return state;
  };
}

export default rootReducer;
