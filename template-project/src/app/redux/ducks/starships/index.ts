import { IStarshipState, StarshipTypes } from './types';

import IAction from '../types';

const INITIAL_STATE: IStarshipState = {
  data: {
    id: 0,
    name: '',
  },
  error: false,
  loading: false,
};

export default (state: IStarshipState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case StarshipTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case StarshipTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case StarshipTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {},
      };

    case StarshipTypes.CLEAR_DATA:
      return INITIAL_STATE;

    default:
      return state;
  }
};
