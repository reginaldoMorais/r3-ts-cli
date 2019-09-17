import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { IAction } from '../../types';
import { StarshipTypes, IStarshipState, IStarship } from '../types';
import reducer from '../index'

describe(`Starships Reducer`, () => {
  let STARSHIP_INITIAL_STATE: IStarship;
  let INITIAL_STATE: IStarshipState;

  beforeEach(() => {
    STARSHIP_INITIAL_STATE = {
      id: 0,
      name: '',
    };

    INITIAL_STATE = {
      data: STARSHIP_INITIAL_STATE,
      error: false,
      loading: false,
    };
  });

  it(`Should return loading equals true when action @starships/LOAD_REQUEST`, () => {
    const action: IAction = {
      type: StarshipTypes.LOAD_REQUEST,
      payload: {
        data: null,
      }
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.loading).toEqual(true);
  });

  it(`Should return state success`, () => {
    const starship: IStarship = {
      id: 1,
      name: 'X-Wing',
    };

    const action: IAction = {
      type: StarshipTypes.LOAD_SUCCESS,
      payload: {
        data: starship,
      },
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.data.name).toEqual('X-Wing');
  });

  it(`Should return error equals true when action @starships/LOAD_FAILURE`, () => {
    const action: IAction = {
      type: StarshipTypes.LOAD_FAILURE,
      payload: {
        data: null,
      }
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.error).toEqual(true);
  });
});
