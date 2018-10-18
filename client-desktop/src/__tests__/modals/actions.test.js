import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  TOGGLE_ADD_GROUP_MODAL,
  TOGGLE_ADD_MEMBER_MODAL,
  TOGGLE_GROUP_SETTINGS_MODAL
} from '../../app/redux/modules/modals/types';
import {
  toggleAddGroupModal,
  toggleAddMemberModal,
  toggleGroupSettingsModal
} from '../../app/redux/modules/modals/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches toggleAddGroupModal action', () => {
    const expectedActions = [{ type: TOGGLE_ADD_GROUP_MODAL, payload: mocks.modals }];
    store.dispatch(toggleAddGroupModal(mocks.modals));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches toggleAddMemberModal action', () => {
    const expectedActions = [{ type: TOGGLE_ADD_MEMBER_MODAL, payload: mocks.modals }];
    store.dispatch(toggleAddMemberModal(mocks.modals));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches toggleGroupSettingsModal action', () => {
    const expectedActions = [{ type: TOGGLE_GROUP_SETTINGS_MODAL, payload: mocks.modals }];
    store.dispatch(toggleGroupSettingsModal(mocks.modals));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
