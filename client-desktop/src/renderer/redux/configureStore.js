import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, composedEnhancers);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}

export default configureStore;
