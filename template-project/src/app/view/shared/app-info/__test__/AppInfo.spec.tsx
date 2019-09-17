import React from 'react';

import { mountWithIntl } from '../../../../../utils/intl-enzyme-test-helper';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AppInfo from '../AppInfo';

Enzyme.configure({ adapter: new Adapter() });

describe(`AppInfo rendering`, () => {
  it(`Should render a AppInfo with DEV configs`, () => {
    const component = mountWithIntl(<AppInfo />);
    expect(component.find('.app-endpoint').first().text()).toEqual('on http://localhost:8081');
    expect(component.find('.app-env').first().text()).toEqual('in Development mode');
  });
});
