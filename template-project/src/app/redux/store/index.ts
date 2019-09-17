import 'babel-polyfill';
import {
  createStore,
  applyMiddleware,
  compose,
  Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { IApplicationState } from './types';

import rootReducer from '../ducks/rootReducer';
import rootSaga from '../ducks/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const createServerStore = (initialState: any) => createStore(rootReducer, initialState);

export const createClientStore = (initialState: any, devTools: Function) => {
  const persistConfig = { key: 'root', storage };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store: Store<IApplicationState> = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      devTools,
    ),
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);
  persistor.purge();

  return { store, persistor };
};

export default (initialState: any = {}, devTools = (f: any) => f, isServer = false) => {
  if (isServer) {
    return createServerStore(initialState);
  }
  return createClientStore(initialState, devTools);
};
