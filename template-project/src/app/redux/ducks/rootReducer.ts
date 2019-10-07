import { combineReducers, Action } from 'redux';
import storage from 'redux-persist/lib/storage';

/* Reducers */
import { reducer as toastr } from 'react-redux-toastr';
import character from './characters';
import starship from './starships';
import locate from './locate';

const combineAppReducers = combineReducers({
  character,
  starship,
  locate,
  toastr
});

export default (state: any, action: Action) => {
  if (action.type === 'RESET_STORE') {
    Object.keys(state).forEach(key => {
      storage.removeItem(`persist:${key}`);
    });

    state = undefined;
  }

  return combineAppReducers(state, action);
};
