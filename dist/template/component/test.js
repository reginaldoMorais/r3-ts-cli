"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import React from 'react';\n\nimport { mountWithIntl } from '../../../../../utils/intl-enzyme-test-helper';\nimport Enzyme from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\n\nimport " + component + " from '../" + component + "';\n\nEnzyme.configure({ adapter: new Adapter() });\n\ndescribe(`" + component + " rendering`, () => {\n  it(`Should render " + component + " with h1`, () => {\n    const component = mountWithIntl(<" + component + " />);\n    expect(component.find('h1').text()).toEqual('" + component + " page');\n  });\n});\n";
});
