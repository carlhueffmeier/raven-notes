import { createTypeWithStatus } from '../../../lib/reduxUtils';

const CREATE_GROUP = createTypeWithStatus('app/entities/group/create');
const UPDATE_GROUP = createTypeWithStatus('app/entities/group/update');
const ADD_MEMBER = createTypeWithStatus('app/entities/group/add-member');

export { CREATE_GROUP, UPDATE_GROUP, ADD_MEMBER };
