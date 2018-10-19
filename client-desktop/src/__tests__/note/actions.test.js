import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE } from '../../app/redux/modules/note/types';
import {
  fetchNotes,
  fetchNotesSuccess,
  fetchNotesError,
  createNote,
  createNoteSuccess,
  createNoteError,
  updateNote,
  updateNoteSuccess,
  updateNoteError
} from '../../app/redux/modules/note/actions';
import * as mocks from '../../__mocks__/mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches fetchNotes action', () => {
    const expectedActions = [{ type: FETCH_NOTES.START }];
    store.dispatch(fetchNotes());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches fetchNotesSuccess action', () => {
    const expectedActions = [{ type: FETCH_NOTES.SUCCESS, payload: mocks.content }];
    store.dispatch(fetchNotesSuccess(mocks.content));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches fetchNotesError action', () => {
    const expectedActions = [{ type: FETCH_NOTES.ERROR, error: mocks.error }];
    store.dispatch(fetchNotesError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches createNote action', () => {
    const expectedActions = [{ type: CREATE_NOTE.START }];
    store.dispatch(createNote());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches createNoteSuccess action', () => {
    const expectedActions = [{ type: CREATE_NOTE.SUCCESS, payload: mocks.content }];
    store.dispatch(createNoteSuccess(mocks.content));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches createNoteError action', () => {
    const expectedActions = [{ type: CREATE_NOTE.ERROR, error: mocks.error }];
    store.dispatch(createNoteError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches updateNote action', () => {
    const expectedActions = [{ type: UPDATE_NOTE.START, payload: mocks.content }];
    store.dispatch(updateNote(mocks.content));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches updateNoteSuccess action', () => {
    const expectedActions = [{ type: UPDATE_NOTE.SUCCESS, payload: mocks.content }];
    store.dispatch(updateNoteSuccess(mocks.content));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches updateNoteError action', () => {
    const expectedActions = [{ type: UPDATE_NOTE.ERROR, error: mocks.error }];
    store.dispatch(updateNoteError(mocks.error));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
