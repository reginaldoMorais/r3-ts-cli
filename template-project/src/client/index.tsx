import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from '../app/redux/store';
import Controller from '../app/view/controller/ControllerContainer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __INITIAL_STATE__: any;
  }
}

const togglePluing = () => {
  if (process.env.NODE_ENV === 'development') {
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  return (f: any) => f;
};

const { store, persistor }: any = configureStore(window.__INITIAL_STATE__, togglePluing());

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Controller />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
