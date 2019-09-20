export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Lang, { Locates } from '../../../../lang';

import { IntlProvider } from 'react-intl';
import ${component} from '../${component}';
import ${component}Container from '../${component}Container';

import rootReducer from '../../../../redux/ducks/rootReducer';

Enzyme.configure({ adapter: new Adapter() });

describe(\`${component}Container rendering\`, () => {
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

  it(\`Should render ${component} with h1\`, () => {
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

    const container = mountWithStore(<${component}Container />, initialState);
    const component = container.find(${component});
    expect(component.find('h1').text()).toEqual('${component} page');
  });
});

`;
};
