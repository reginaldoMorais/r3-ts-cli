import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import IAction from '../../types';
import { LocateTypes, ILocateState, ILocate } from '../types';
import reducer from '../index'

describe(`Locate Reducer`, () => {
  let LOCATE_INITIAL_STATE: ILocate;
  let INITIAL_STATE: ILocateState;

  beforeEach(() => {
    LOCATE_INITIAL_STATE = {
      id: 'es',
      label: 'es',
    };

    INITIAL_STATE = {
      data: LOCATE_INITIAL_STATE,
      error: false,
      loading: false,
    };
  });

  it(`Should return loading equals true when action @locate/LOCATE_CHANGE`, () => {
    const action: IAction = {
      type: LocateTypes.LOCATE_CHANGE,
      payload: {
        data: null,
      }
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.loading).toEqual(true);
  });

  it(`Should return state success`, () => {
    const action: IAction = {
      type: LocateTypes.LOCATE_CHANGE_SUCCESS,
      payload: {
        data: LOCATE_INITIAL_STATE,
      },
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.data.label).toEqual('es');
  });

  it(`Should return error equals true when action @locate/LOCATE_CHANGE_FAILURE`, () => {
    const action: IAction = {
      type: LocateTypes.LOCATE_CHANGE_FAILURE,
      payload: {
        data: null,
      }
    }

    const newState = reducer(INITIAL_STATE, action);

    expect(newState.error).toEqual(true);
  });
});
