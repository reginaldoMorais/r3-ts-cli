import React from 'react';

import { mountWithIntl } from '../../../../../utils/intl-enzyme-test-helper';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IntlSelect from '../IntlSelect';

Enzyme.configure({ adapter: new Adapter() });

describe(`IntlSelect rendering`, () => {
  it(`Should render a IntlSelect with four Lang options`, () => {
    const locate = {
      data: {
        id: 'en',
        label: 'en',
      },
      loading: false,
      error: false,
    };

    const component = mountWithIntl(<IntlSelect locate={locate} locateChange={() => {}} />);
    expect(component.find('.app-languages').first().text()).toEqual('Language:enesfrpt-BR');
  });
});
