import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from '../../storage';
import { FETCH_CURRENT_USER, SIGNIN, SIGNUP, SIGNOUT } from './types';

const persistConfig = {
  key: 'authentication',
  storage,
  whitelist: ['me']
};

const rootReducer = combineReducers({
  me: currentUserReducer,
  loading: loadingReducer,
  error: errorReducer
});

function currentUserReducer(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER.SUCCESS:
    case SIGNIN.SUCCESS:
    case SIGNUP.SUCCESS: {
      const { result } = action.payload;
      return result;
    }
    case SIGNOUT: {
      return null;
    }
    default:
      return state;
  }
}

function loadingReducer(state = false, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER.START:
    case SIGNIN.START:
    case SIGNUP.START:
      return true;
    case FETCH_CURRENT_USER.SUCCESS:
    case SIGNIN.SUCCESS:
    case SIGNUP.SUCCESS:
    case FETCH_CURRENT_USER.ERROR:
    case SIGNIN.ERROR:
    case SIGNUP.ERROR:
      return false;
    default:
      return state;
  }
}

function errorReducer(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER.START:
    case SIGNIN.START:
    case SIGNUP.START:
    case FETCH_CURRENT_USER.SUCCESS:
    case SIGNIN.SUCCESS:
    case SIGNUP.SUCCESS:
      return null;
    case FETCH_CURRENT_USER.ERROR:
    case SIGNIN.ERROR:
    case SIGNUP.ERROR:
      return action.error;
    default:
      return state;
  }
}

export default persistReducer(persistConfig, rootReducer);
