import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Lang, { Locates } from '../../../../lang';

import { IntlProvider } from 'react-intl';
import IntlSelect from '../IntlSelect';
import IntlSelectContainer from '../IntlSelectContainer';

import rootReducer from '../../../../redux/ducks/rootReducer';

Enzyme.configure({ adapter: new Adapter() });

describe(`IntlSelectContainer rendering`, () => {
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
        </Provider>);
    };
  });

  it(`Should render a IntlSelect with four Lang options`, () => {
    const initialState = {
      locate: {
        data: {
          id: 'en',
          label: 'en',
        },
        loading: false,
        error: false,
      },
    };

    const container = mountWithStore(<IntlSelectContainer />, initialState);
    const component = container.find(IntlSelect);
    expect(component.find('.app-languages').first().text()).toEqual('Language:enesfrpt-BR');
  });
});
