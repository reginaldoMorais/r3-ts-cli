import { ILocateState, LocateTypes, ILocate } from './types';

import IAction from '../types';

const LOCATE_INITIAL_STATE: ILocate = {
  id: 'en',
  label: 'en',
}

const INITIAL_STATE: ILocateState = {
  data: LOCATE_INITIAL_STATE,
  error: false,
  loading: false,
};

export default (state: ILocateState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case LocateTypes.LOCATE_CHANGE:
      return { ...state, loading: true };

    case LocateTypes.LOCATE_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case LocateTypes.LOCATE_CHANGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case LocateTypes.CLEAR_LOCATE:
      return {
        loading: false,
        error: false,
        data: LOCATE_INITIAL_STATE,
      };

    default:
      return state;
  }
};
