const FETCH_NOTES = createTypeWithStatus('app/note/fetch');
const CREATE_NOTE = createTypeWithStatus('app/note/create');
const UPDATE_NOTE = createTypeWithStatus('app/note/update');

function createTypeWithStatus(baseType) {
  return {
    START: baseType + '/start',
    SUCCESS: baseType + '/success',
    ERROR: baseType + '/error'
  };
}

export { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE };
