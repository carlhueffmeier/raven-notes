import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ON_SEARCH } from '../../app/redux/modules/search/types';
import { changeQuery } from '../../app/redux/modules/search/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches changeQuery action', () => {
    const expectedActions = [{ type: ON_SEARCH, payload: mocks.name }];
    store.dispatch(changeQuery(mocks.name));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
