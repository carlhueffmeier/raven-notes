import { createTypeWithStatus } from '../../../lib/reduxUtils';

const FETCH_NOTES = createTypeWithStatus('app/entities/note/fetch');
const CREATE_NOTE = createTypeWithStatus('app/entities/note/create');
const UPDATE_NOTE = createTypeWithStatus('app/entities/note/update');

export { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE };
