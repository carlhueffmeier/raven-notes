function createTypeWithStatus(baseType) {
  return {
    START: baseType + '/start',
    SUCCESS: baseType + '/success',
    ERROR: baseType + '/error'
  };
}

export { createTypeWithStatus };
