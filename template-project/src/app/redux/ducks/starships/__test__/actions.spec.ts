import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { IStarship } from '../types';
import Actions from '../actions'

describe(`Starships Actions`, () => {
  describe(`Actions.loadRequest`, () => {
    it(`Should return action LOCATE_CHANGE when search for a Starship`, () => {
      const nextLang = '1';
      const action = Actions.loadRequest(nextLang);

      expect(action.type).toEqual('@starships/LOAD_REQUEST');
      expect(action.payload).toEqual('1');
    });
  });

  describe(`Actions.loadSuccess`, () => {
    it(`Should return action LOAD_SUCCESS when found a Starship`, () => {
      const nextLang: IStarship = {
        id: 1,
        name: 'X-Wing',
      };
      const action = Actions.loadSuccess(nextLang);

      expect(action.type).toEqual('@starships/LOAD_SUCCESS');
      expect(action.payload.data.name).toEqual('X-Wing');
    });
  });
});
