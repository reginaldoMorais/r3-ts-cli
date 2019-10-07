import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { ILocate } from '../types';
import Actions from '../actions';

describe(`Locate Actions`, () => {
  describe(`Actions.locateChange`, () => {
    it(`Should return action LOCATE_CHANGE when changing to locate es`, () => {
      const nextLang = 'es';
      const action = Actions.locateChange(nextLang);

      expect(action.type).toEqual('@locate/LOCATE_CHANGE');
      expect(action.payload).toEqual('es');
    });
  });

  describe(`Actions.locateChanging`, () => {
    it(`Should return es Lang when changing to locate es`, () => {
      const nextLang = 'es';
      const action = Actions.locateChanging(nextLang);

      expect(action.label).toEqual('es');
    });

    it(`Should return fr Lang when changing to locate fr`, () => {
      const nextLang = 'fr';
      const action = Actions.locateChanging(nextLang);

      expect(action.label).toEqual('fr');
    });

    it(`Should return pt-BR Lang when changing to locate pt-BR`, () => {
      const nextLang = 'pt-BR';
      const action = Actions.locateChanging(nextLang);

      expect(action.label).toEqual('pt-BR');
    });

    it(`Should return en Lang when changing to unknown locate`, () => {
      const nextLang = 'xx';
      const action = Actions.locateChanging(nextLang);

      expect(action.label).toEqual('en');
    });
  });

  describe(`Actions.locateChangeSuccess`, () => {
    it(`Should return action LOCATE_CHANGE_SUCCESS with data when changing to locate es`, () => {
      const nextLang: ILocate = {
        id: 'es',
        label: 'es'
      };
      const action = Actions.locateChangeSuccess(nextLang);

      expect(action.type).toEqual('@locate/LOCATE_CHANGE_SUCCESS');
      expect(action.payload.data.label).toEqual('es');
    });
  });
});
