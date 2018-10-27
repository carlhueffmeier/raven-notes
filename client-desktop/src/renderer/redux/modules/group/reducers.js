import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from '../../storage';
import { unique, path } from '../../../lib/utils';
import { CREATE_GROUP, UPDATE_GROUP, ADD_MEMBER } from './types';
import { createLoadingReducer, createErrorReducer } from '../../../lib/reduxUtils';

const persistConfig = {
  key: 'group',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['byId', 'allIds']
};

const rootReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer,
  loading: createLoadingReducer({
    compositeTypes: [CREATE_GROUP, UPDATE_GROUP, ADD_MEMBER]
  }),
  error: createErrorReducer({
    compositeTypes: [CREATE_GROUP, UPDATE_GROUP, ADD_MEMBER],
    errorPath: ['response', 'errors', '0', 'message']
  })
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
