import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from '../../storage';
import { FETCH_CURRENT_USER, SIGNIN, SIGNUP, SIGNOUT } from './types';
import { createLoadingReducer, createErrorReducer } from '../../../lib/reduxUtils';

const persistConfig = {
  key: 'authentication',
  storage,
  whitelist: ['me', 'authToken']
};

const rootReducer = combineReducers({
  me: currentUserReducer,
  authToken: authTokenReducer,
  loading: createLoadingReducer({
    compositeTypes: [FETCH_CURRENT_USER, SIGNIN, SIGNUP]
  }),
  error: createErrorReducer({
    compositeTypes: [FETCH_CURRENT_USER, SIGNIN, SIGNUP],
    errorPath: ['response', 'errors', '0', 'message']
  })
});

function currentUserReducer(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER.SUCCESS: {
      const { result } = action.payload;
      return result.me;
    }
    case SIGNOUT: {
      return null;
    }
    default:
      return state;
  }
}

function authTokenReducer(state = '', action) {
  switch (action.type) {
    case SIGNIN.SUCCESS:
    case SIGNUP.SUCCESS: {
      const { token } = action.payload;
      return token;
    }
    case SIGNOUT: {
      return '';
    }
    default:
      return state;
  }
}

export default persistReducer(persistConfig, rootReducer);
