import { ICharacter, ICharacterState, CharacterTypes } from './types';

import { IAction } from '../types';

const CHARACTER_INITIAL_STATE: ICharacter = {
  id: 0,
  name: '',
  homeworld: '',
  gender: '',
  url: '',
};

const INITIAL_STATE: ICharacterState = {
  data: CHARACTER_INITIAL_STATE,
  error: false,
  loading: false,
};

export default (state: ICharacterState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case CharacterTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case CharacterTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case CharacterTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {},
      };

    case CharacterTypes.CLEAR_DATA:
      return INITIAL_STATE;

    default:
      return state;
  }
};
