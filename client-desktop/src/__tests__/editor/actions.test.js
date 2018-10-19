import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UPDATE_EDITOR_CONTENT } from '../../app/redux/modules/editor/types';
import { updateEditorContent } from '../../app/redux/modules/editor/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches updateEditorContent action', () => {
    const expectedActions = [{ type: UPDATE_EDITOR_CONTENT, payload: mocks.content }];
    store.dispatch(updateEditorContent(mocks.content));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
