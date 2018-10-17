import { path, prop } from './utils';

function createTypeWithStatus(baseType) {
  return {
    START: baseType + '/start',
    SUCCESS: baseType + '/success',
    ERROR: baseType + '/error'
  };
}

// Flattens state object one level deep on `byId`
// Useful for denormalization
function getRawEntities(entities) {
  return Object.entries(entities).reduce(
    (rawEntities, [key, val]) => ({
      ...rawEntities,
      [key]: val.byId
    }),
    {}
  );
}

function createErrorReducer({ compositeTypes, errorPath = [] }) {
  const startTypes = compositeTypes.map(prop('START'));
  const successTypes = compositeTypes.map(prop('SUCCESS'));
  const resetErrorTypes = [...startTypes, ...successTypes];
  const errorTypes = compositeTypes.map(prop('ERROR'));

  return function errorReducer(state = null, action) {
    if (resetErrorTypes.includes(action.type)) {
      return null;
    }
    if (errorTypes.includes(action.type)) {
      return path(errorPath, action.error);
    }
    return state;
  };
}

function createLoadingReducer({ compositeTypes }) {
  const startTypes = compositeTypes.map(prop('START'));
  const successTypes = compositeTypes.map(prop('SUCCESS'));
  const errorTypes = compositeTypes.map(prop('ERROR'));
  const resetLoadingTypes = [...successTypes, ...errorTypes];

  return function loadingReducer(state = false, action) {
    if (startTypes.includes(action.type)) {
      return true;
    }
    if (resetLoadingTypes.includes(action.type)) {
      return false;
    }
    return state;
  };
}

export { createTypeWithStatus, getRawEntities, createErrorReducer, createLoadingReducer };
