import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CREATE_GROUP, UPDATE_GROUP, ADD_MEMBER } from '../../app/redux/modules/group/types';
import {
  createGroup,
  createGroupSuccess,
  createGroupError,
  updateGroup,
  updateGroupSuccess,
  updateGroupError,
  addMember,
  addMemberSuccess,
  addMemberError
} from '../../app/redux/modules/group/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches createGroup action', () => {
    const expectedActions = [{ type: CREATE_GROUP.START, payload: mocks.groupName }];
    store.dispatch(createGroup(mocks.groupName));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches createGroupSuccess action', () => {
    const expectedActions = [{ type: CREATE_GROUP.SUCCESS, payload: mocks.groupContent }];
    store.dispatch(createGroupSuccess(mocks.groupContent));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches createGroupError action', () => {
    const expectedActions = [{ type: CREATE_GROUP.ERROR, error: mocks.error }];
    store.dispatch(createGroupError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches updateGroup action', () => {
    const expectedActions = [{ type: UPDATE_GROUP.START, payload: mocks.groupContent }];
    store.dispatch(updateGroup(mocks.groupContent));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches updateGroupSuccess action', () => {
    const expectedActions = [{ type: UPDATE_GROUP.SUCCESS, payload: mocks.groupContent }];
    store.dispatch(updateGroupSuccess(mocks.groupContent));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches updateGroupError action', () => {
    const expectedActions = [{ type: UPDATE_GROUP.ERROR, error: mocks.error }];
    store.dispatch(updateGroupError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches addMember action', () => {
    const expectedActions = [{ type: ADD_MEMBER.START, payload: mocks.id }];
    store.dispatch(addMember(mocks.id));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches addMemberSuccess action', () => {
    const expectedActions = [{ type: ADD_MEMBER.SUCCESS, payload: mocks.user }];
    store.dispatch(addMemberSuccess(mocks.user));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches addMemberError action', () => {
    const expectedActions = [{ type: ADD_MEMBER.ERROR, error: mocks.error }];
    store.dispatch(addMemberError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
