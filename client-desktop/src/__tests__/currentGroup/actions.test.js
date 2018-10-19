import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  SELECT_CURRENT_GROUP,
  RESET_CURRENT_GROUP
} from './../../app/redux/modules/currentGroup/types';
import { selectGroup, resetCurrentGroup } from './../../app/redux/modules/currentGroup/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches selectGroup action', () => {
    const expectedActions = [{ type: SELECT_CURRENT_GROUP, payload: mocks.id }];
    store.dispatch(selectGroup(mocks.id));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches resetCurrentGroup action', () => {
    const expectedActions = [{ type: RESET_CURRENT_GROUP }];
    store.dispatch(resetCurrentGroup());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
