import { denormalize } from 'normalizr';
import { currentUserSchema } from './schema';
import { getRawEntities } from '../../../lib/reduxUtils';

function getModuleState(state) {
  return state.authentication;
}

function getCurrentUser(state) {
  const currentUserId = getModuleState(state).me;
  const denormalizedUser = denormalize(
    currentUserId,
    currentUserSchema,
    getRawEntities(state.entities)
  );
  return denormalizedUser;
}

function getIsAuthenticated(state) {
  return getModuleState(state).me !== null;
}

function getLoading(state) {
  return getModuleState(state).loading;
}

function getError(state) {
  return getModuleState(state).error;
}

export { getCurrentUser, getIsAuthenticated, getLoading, getError };
