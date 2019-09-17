import React from 'react';

import { mountWithIntl } from '../../../../../utils/intl-enzyme-test-helper';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../Home';

import { ICharacter } from '../../../../redux/ducks/characters/types';
import { IStarship } from '../../../../redux/ducks/starships/types';
import { ILocate } from '../../../../redux/ducks/locate/types';

Enzyme.configure({ adapter: new Adapter() });

describe(`Home Page rendering`, () => {
  it(`Should render a Home Page with h1 without character`, () => {
    const character: ICharacter = {
      id: 0,
      name: '',
      gender: '',
      homeworld: '',
      url: ''
    };

    const starship: IStarship = {
      id: 0,
      name: ''
    };

    const locate: ILocate = {
      id: 'en',
      label: 'en'
    };

    const component = mountWithIntl(
      <Home
        character={{
          data: character,
          error: false,
          loading: false
        }}
        starship={{
          data: starship,
          error: false,
          loading: false
        }}
        locate={{
          data: locate,
          error: false,
          loading: false
        }}
        loadCharacter={() => {}}
        loadStarships={() => {}}
        clearCharacterData={() => {}}
        clearStarshipsData={() => {}}
      />
    );

    expect(component.find('h1').text()).toEqual('');
  });
  it(`Should render a Home Page with character name`, () => {
    const character: ICharacter = {
      id: 1,
      name: 'Luke Skywalker',
      gender: 'Male',
      homeworld: 'Tatooene',
      url: ''
    };

    const starship: IStarship = {
      id: 2,
      name: 'X-Wing'
    };

    const locate: ILocate = {
      id: 'en',
      label: 'en'
    };

    const component = mountWithIntl(
      <Home
        character={{
          data: character,
          error: false,
          loading: false
        }}
        starship={{
          data: starship,
          error: false,
          loading: false
        }}
        locate={{
          data: locate,
          error: false,
          loading: false
        }}
        loadCharacter={() => {}}
        loadStarships={() => {}}
        clearCharacterData={() => {}}
        clearStarshipsData={() => {}}
      />
    );
    expect(component.find('h1').text()).toEqual('I am Luke Skywalker and I am a X-Wing pilot');
  });
});
