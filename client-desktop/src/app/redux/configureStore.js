import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, composedEnhancers);
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
