import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ICharacter } from '../../../../redux/ducks/characters/types';
import { IStarship } from '../../../../redux/ducks/starships/types';
import { ILocate } from 'app/redux/ducks/locate/types';

import Lang, { Locates } from '../../../../lang';

import { IntlProvider } from 'react-intl';
import Home from '../Home';
import HomeContainer from '../HomeContainer';

import rootReducer from '../../../../redux/ducks/rootReducer';

Enzyme.configure({ adapter: new Adapter() });

describe(`HomeContainer rendering`, () => {
  let mountWithStore: any;

  beforeEach(() => {
    mountWithStore = (component: any, initialState: any = {}) => {
      const store = createStore(rootReducer, initialState);
      const currentLang = Lang[Locates.EN];
      return mount(
        <Provider store={store}>
          <IntlProvider locale={currentLang.locale} messages={currentLang.messages}>
            {component}
          </IntlProvider>
        </Provider>
      );
    };
  });

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

    const initialState = {
      character: {
        data: character,
        loading: false,
        error: true
      },
      starship: {
        data: starship,
        loading: false,
        error: false
      },
      locate: {
        data: locate,
        error: false,
        loading: false
      }
    };

    const container = mountWithStore(<HomeContainer />, initialState);
    const component = container.find(Home);

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

    const initialState = {
      character: {
        data: character,
        loading: false,
        error: false
      },
      starship: {
        data: starship,
        loading: false,
        error: false
      },
      locate: {
        data: locate,
        error: false,
        loading: false
      }
    };

    const container = mountWithStore(<HomeContainer />, initialState);
    const component = container.find(Home);

    expect(component.find('h1').text()).toEqual('I am Luke Skywalker and I am a X-Wing pilot');
  });
});
