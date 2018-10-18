import {
  createLoadingReducer,
  createErrorReducer
} from '../../app/redux/modules/authentication/createReducer';
import {
  FETCH_CURRENT_USER,
  SIGNIN,
  SIGNUP,
  SIGNOUT
} from '../../app/redux/modules/authentication/actions';

describe('createLoadingReducer', () => {
  describe('INITIAL_STATE', () => {
    const action = { type: 'INCORRECT_ACTION' };
    const initialState = {};

    expect(createLoadingReducer(undefined, FETCH_CURRENT_USER.SUCCESS));
  });
});
