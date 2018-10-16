import * as types from './types';

const changeQuery = payload => ({
  type: types.ON_SEARCH,
  payload
});

export { changeQuery };
