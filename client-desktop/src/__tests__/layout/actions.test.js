import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CHANGE_LAYOUT } from '../../app/redux/modules/layout/types';
import { changeLayout } from '../../app/redux/modules/layout/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches changeLayout action', () => {
    const expectedActions = [{ type: CHANGE_LAYOUT, payload: mocks.layout }];
    store.dispatch(changeLayout(mocks.layout));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
