import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from '../../storage';
import { unique, path } from '../../../lib/utils';

const persistConfig = {
  key: 'user',
  storage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
});

function byIdReducer(state = {}, action) {
  const userEntities = path(['payload', 'entities', 'users'], action);
  if (userEntities) {
    return { ...state, ...userEntities };
  }
  return state;
}

function allIdsReducer(state = [], action) {
  const userEntities = path(['payload', 'entities', 'users'], action);
  if (userEntities) {
    const ids = Object.keys(userEntities);
    return unique([...ids, ...state]);
  }
  return state;
}

export default persistReducer(persistConfig, rootReducer);
