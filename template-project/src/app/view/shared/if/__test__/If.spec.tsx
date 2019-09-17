import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import If from '../If';

describe(`If rendering`, () => {
  it(`Should render main component if test true`, () => {
    const component = shallow(<If test={true}><div>abc</div></If>);
    expect(component.find('div').text()).toEqual('abc');
  });

  it(`Should not render main component if test false`, () => {
    const component = shallow(<If test={false}><div>abc</div></If>);
    expect(component.find('div')).toHaveLength(0);
  });

  it(`Should render secondary component if test false`, () => {
    const component = shallow(<If test={false} component={<div>xyz</div>}><div>abc</div></If>);
    expect(component.find('div').text()).toEqual('xyz');
  });
})
