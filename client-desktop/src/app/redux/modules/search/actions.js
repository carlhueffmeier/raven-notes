import * as types from './types';

const onQueryChange = payload => ({
  type: types.ON_SEARCH,
  payload
});

export { onQueryChange };
