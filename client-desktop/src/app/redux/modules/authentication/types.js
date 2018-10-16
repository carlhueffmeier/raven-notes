import { createTypeWithStatus } from '../../../lib/reduxUtils';

const FETCH_CURRENT_USER = createTypeWithStatus('app/authentication/fetch-current-user');
const SIGNIN = createTypeWithStatus('app/authentication/signin');
const SIGNUP = createTypeWithStatus('app/authentication/signup');
const SIGNOUT = 'app/authentication/signout';
const RESET_AUTH_HEADERS = 'app/authentication/reset-headers';

export { FETCH_CURRENT_USER, SIGNIN, SIGNUP, SIGNOUT, RESET_AUTH_HEADERS };
