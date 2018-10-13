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

export { createTypeWithStatus, getRawEntities };
