import { RESET_STORE } from './types';

function resetStore() {
  return {
    type: RESET_STORE
  };
}

export { resetStore };
