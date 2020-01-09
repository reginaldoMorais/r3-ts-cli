import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import IAction from '../../types';
import { CharacterTypes, ICharacterState, ICharacter } from '../types';
import reducer from '../index'

describe(`Characters Reducer`, () => {
  let CHARACTER_INITIAL_STATE: ICharacter;
  let INITIAL_STATE: ICharacterState;

  beforeEach(() => {
    CHARACTER_INITIAL_STATE = {
      id: 0,
      name: '',
      homeworld: '',
      gender: '',
      url: '',
    };

    INITIAL_STATE = {
      data: CHARACTER_INITIAL_STATE,
      error: false,
      loading: false,
    };
  });

  it(`Should return loading equals true when action @characters/LOAD_REQUEST`, () => {
    const action: IAction = {
      type: CharacterTypes.LOAD_REQUEST,
      payload: {
        data: null,
      }
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.loading).toEqual(true);
  });

  it(`Should return state success`, () => {
    const character: ICharacter = {
      id: 1,
      name: 'Luke Skywalker',
      gender: 'Male',
      homeworld: 'Tattoine',
      url: 'xyz',
    };

    const action: IAction = {
      type: CharacterTypes.LOAD_SUCCESS,
      payload: {
        data: character,
      },
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.data.name).toEqual('Luke Skywalker');
  });

  it(`Should return error equals true when action @characters/LOAD_FAILURE`, () => {
    const action: IAction = {
      type: CharacterTypes.LOAD_FAILURE,
      payload: {
        data: null,
      }
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.error).toEqual(true);
  });
});
