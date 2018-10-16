import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from '../../storage';
import { unique, path } from '../../../lib/utils';

const persistConfig = {
  key: 'group',
  storage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
});

function byIdReducer(state = {}, action) {
  const groupEntities = path(['payload', 'entities', 'groups'], action);
  if (groupEntities) {
    return { ...state, ...groupEntities };
  }
  return state;
}

function allIdsReducer(state = [], action) {
  const groupEntities = path(['payload', 'entities', 'groups'], action);
  if (groupEntities) {
    const ids = Object.keys(groupEntities);
    return unique([...ids, ...state]);
  }
  return state;
}

export default persistReducer(persistConfig, rootReducer);
