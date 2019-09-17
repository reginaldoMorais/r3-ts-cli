import React from 'react';
import {IntlProvider, createIntl} from 'react-intl';
import {mount, shallow} from 'enzyme';
import Lang from '../app/lang';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../app/redux/ducks/rootReducer';

const currentLang = Lang['en'];

export const mountWithIntl = (node: React.ReactElement) => {
  return mount(intlProvider(node), {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale: currentLang.locale,
      defaultLocale: currentLang.locale,
      messages: currentLang.messages,
    },
  });
}

export const shallowWithIntl = (node: React.ReactElement) => {
  return shallow(intlProvider(node), {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale: currentLang.locale,
      defaultLocale: currentLang.locale,
      messages: currentLang.messages,
    },
  });
}

export const intlProvider = (component: React.ReactElement) => {
  const store = createStore(rootReducer, {});
  return (
    <Provider store={store}>
      <IntlProvider
        locale={currentLang.locale}
        messages={currentLang.messages}
      >
        {React.cloneElement(component)}
      </IntlProvider>
    </Provider>
  );
}
