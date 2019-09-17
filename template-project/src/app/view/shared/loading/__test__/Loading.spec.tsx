import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Loading from '../Loading';

describe(`Loading rendering`, () => {
  it(`Should render a Loading when props isLoading equals true`, () => {
    const component = shallow(<Loading isLoading={true} />);
    expect(component.find('div.loading')).toHaveLength(1);
  });

  it(`Should not render a Loading when props isLoading equals false`, () => {
    const component = shallow(<Loading isLoading={false} />);
    expect(component.find('div.loading')).toHaveLength(0);
  });
})
