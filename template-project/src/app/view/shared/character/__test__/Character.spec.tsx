import React from 'react';

import { mountWithIntl } from '../../../../../utils/intl-enzyme-test-helper';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CharacterModel from '../../../../../server/models/Character';
import Character from '../Character';

import { ICharacter } from '../../../../redux/ducks/characters/types';

Enzyme.configure({ adapter: new Adapter() });

describe(`Character rendering`, () => {
  it(`Should render a Character with h1 without character`, () => {
    const characterModel = new CharacterModel('', '');

    const component = mountWithIntl(<Character character={characterModel} />);
    expect(component.find('h1').text()).toEqual('');
  });
  it(`Should render a Character with character name`, () => {
    const characterModel = new CharacterModel('Luke Skywalker', 'X-Wing');

    const component = mountWithIntl(<Character character={characterModel} />);
    expect(component.find('h1').text()).toEqual('I am Luke Skywalker and I am a X-Wing pilot');
  });
});
