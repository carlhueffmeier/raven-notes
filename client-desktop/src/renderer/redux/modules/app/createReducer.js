import { RESET_STORE } from './types';

function createReducer(rootReducer) {
  return function appReducer(state, action) {
    switch (action.type) {
      case RESET_STORE:
        return rootReducer(
          {
            ...state,
            entities: {
              notes: {
                _persist: state.entities.notes._persist
              },
              groups: {
                _persist: state.entities.groups._persist
              },
              users: {
                _persist: state.entities.users._persist
              }
            },
            ui: undefined,
            authentication: {
              _persist: state.authentication._persist
            }
          },
          action
        );
      default:
        return rootReducer(state, action);
    }
  };
}

export default createReducer;
