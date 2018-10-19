import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  FETCH_CURRENT_USER,
  SIGNIN,
  SIGNUP,
  SIGNOUT,
  RESET_AUTH_HEADERS
} from '../../app/redux/modules/authentication/types';
import {
  fetchCurrentUser,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  signin,
  signinSuccess,
  signinError,
  signup,
  signupSuccess,
  signupError,
  signout,
  resetAuthHeaders
} from '../../app/redux/modules/authentication/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches fetchCurrentUser action', () => {
    const expectedActions = [{ type: FETCH_CURRENT_USER.START }];
    store.dispatch(fetchCurrentUser());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('dispatches fetchCurrentUserSuccess action', () => {
    const expectedActions = [{ type: FETCH_CURRENT_USER.SUCCESS, payload: mocks.user }];
    store.dispatch(fetchCurrentUserSuccess(mocks.user));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('dispatches fetchCurrentUserError action', () => {
    const expectedActions = [{ type: FETCH_CURRENT_USER.ERROR, error: mocks.error }];
    store.dispatch(fetchCurrentUserError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signin action', () => {
    const expectedActions = [{ type: SIGNIN.START }];
    store.dispatch(signin());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signinSuccess action', () => {
    const expectedActions = [{ type: SIGNIN.SUCCESS, payload: mocks.token }];
    store.dispatch(signinSuccess(mocks.token));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signinError action', () => {
    const expectedActions = [{ type: SIGNIN.ERROR, error: mocks.error }];
    store.dispatch(signinError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signup action', () => {
    const expectedActions = [{ type: SIGNUP.START, payload: mocks.user }];
    store.dispatch(signup(mocks.user));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signupSuccess action', () => {
    const expectedActions = [{ type: SIGNUP.SUCCESS, payload: mocks.token }];
    store.dispatch(signupSuccess(mocks.token));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signupError action', () => {
    const expectedActions = [{ type: SIGNUP.ERROR, error: mocks.error }];
    store.dispatch(signupError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signout action', () => {
    const expectedActions = [{ type: SIGNOUT }];
    store.dispatch(signout());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches resetAuthHeaders action', () => {
    const expectedActions = [{ type: RESET_AUTH_HEADERS }];
    store.dispatch(resetAuthHeaders());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
