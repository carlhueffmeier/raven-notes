import { createTypeWithStatus } from '../../../lib/reduxUtils';

const CREATE_GROUP = createTypeWithStatus('app/entities/group/create');
const UPDATE_GROUP = createTypeWithStatus('app/entities/group/update');

export { CREATE_GROUP, UPDATE_GROUP };
