import { ON_SEARCH } from './types';

const initialState = '';

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ON_SEARCH: {
      const newSearch = action.payload;
      return newSearch;
    }
    default:
      return state;
  }
}

export default rootReducer;
