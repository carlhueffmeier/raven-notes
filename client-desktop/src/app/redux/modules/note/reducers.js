import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from '../../storage';
import { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE } from './types';
import { unique, path } from '../../../lib/utils';
import { createLoadingReducer, createErrorReducer } from '../../../lib/reduxUtils';

const persistConfig = {
  key: 'note',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['byId', 'allIds']
};

const rootReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer,
  loading: createLoadingReducer({
    compositeTypes: [FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE]
  }),
  error: createErrorReducer({
    compositeTypes: [FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE],
    errorPath: ['response', 'errors', '0', 'message']
  })
});

function byIdReducer(state = {}, action) {
  const noteEntities = path(['payload', 'entities', 'notes'], action);
  if (noteEntities) {
    return { ...state, ...noteEntities };
  }
  return state;
}

function allIdsReducer(state = [], action) {
  const noteEntities = path(['payload', 'entities', 'notes'], action);
  if (noteEntities) {
    const ids = Object.keys(noteEntities);
    return unique([...ids, ...state]);
  }
  return state;
}

export default persistReducer(persistConfig, rootReducer);
