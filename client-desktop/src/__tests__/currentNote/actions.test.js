import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SELECT_CURRENT_NOTE, RESET_CURRENT_NOTE } from '../../app/redux/modules/currentNote/types';
import { selectNote, resetCurrentNote } from '../../app/redux/modules/currentNote/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches selectNote action', () => {
    const expectedActions = [{ type: SELECT_CURRENT_NOTE, payload: mocks.id }];
    store.dispatch(selectNote(mocks.id));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches resetCurrentNote action', () => {
    const expectedActions = [{ type: RESET_CURRENT_NOTE }];
    store.dispatch(resetCurrentNote());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
