export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import React from 'react';

import { mountWithIntl } from '../../../../../utils/intl-enzyme-test-helper';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ${component} from '../${component}';

Enzyme.configure({ adapter: new Adapter() });

describe(\`${component} rendering\`, () => {
  it(\`Should render ${component} with h1\`, () => {
    const component = mountWithIntl(<${component} />);
    expect(component.find('h1').text()).toEqual('${component} page');
  });
});
`;
};
