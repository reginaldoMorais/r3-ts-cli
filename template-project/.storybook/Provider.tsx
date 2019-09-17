import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { reducer as toastr } from 'react-redux-toastr';

const INITIAL_STATE = {};
const rootReducer = combineReducers({
  toastr,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route>{children}</Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);
