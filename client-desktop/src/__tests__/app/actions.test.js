import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RESET_STORE } from '../../app/redux/modules/app/types';
import { resetStore } from '../../app/redux/modules/app/actions';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches resetStore action', () => {
    const expectedActions = [{ type: RESET_STORE }];
    store.dispatch(resetStore());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
