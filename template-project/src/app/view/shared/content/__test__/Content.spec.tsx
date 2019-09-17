import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Content from '../Content';

describe(`Content rendering`, () => {
  it(`Should render a container`, () => {
    const component = shallow(<Content>test</Content>);
    expect(component.hasClass('content-fluid')).toEqual(false);
  });

  it(`Should render a fluid container`, () => {
    const component = shallow(<Content fluid={true}>test</Content>);
    expect(component.hasClass('content-fluid')).toEqual(true);
  });
})
