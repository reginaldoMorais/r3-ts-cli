import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { ICharacter } from '../types';
import Actions from '../actions'

describe(`Characters Actions`, () => {
  describe(`Actions.loadRequest`, () => {
    it(`Should return action LOCATE_CHANGE when search for a Character`, () => {
      const id = '1';
      const action = Actions.loadRequest(id);

      expect(action.type).toEqual('@characters/LOAD_REQUEST');
      expect(action.payload).toEqual('1');
    });
  });

  describe(`Actions.loadSuccess`, () => {
    it(`Should return action LOAD_SUCCESS when found a Character`, () => {
      const character: ICharacter = {
        id: 1,
        name: 'Luke Skywalker',
        gender: 'Male',
        homeworld: 'Tattoine',
        url: 'xyz',
      };

      const action = Actions.loadSuccess(character);

      expect(action.type).toEqual('@characters/LOAD_SUCCESS');
      expect(action.payload.data.name).toEqual('Luke Skywalker');
    });
  });
});
