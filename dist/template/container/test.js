"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import React from 'react';\n\nimport Enzyme, { mount } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\n\nimport { Provider } from 'react-redux';\nimport { createStore } from 'redux';\n\nimport Lang, { Locates } from '../../../../lang';\n\nimport { IntlProvider } from 'react-intl';\nimport " + component + " from '../" + component + "';\nimport " + component + "Container from '../" + component + "Container';\n\nimport rootReducer from '../../../../redux/ducks/rootReducer';\n\nEnzyme.configure({ adapter: new Adapter() });\n\ndescribe(`" + component + "Container rendering`, () => {\n  let mountWithStore: any;\n\n  beforeEach(() => {\n    mountWithStore = (component: any, initialState: any = {}) => {\n      const store = createStore(rootReducer, initialState);\n      const currentLang = Lang[Locates.EN];\n      return mount(\n        <Provider store={store}>\n          <IntlProvider locale={currentLang.locale} messages={currentLang.messages}>\n            {component}\n          </IntlProvider>\n        </Provider>);\n    };\n  });\n\n  it(`Should render " + component + " with h1`, () => {\n    const initialState = {\n      locate: {\n        data: {\n          id: 'en',\n          label: 'en',\n        },\n        loading: false,\n        error: false,\n      },\n    };\n\n    const container = mountWithStore(<" + component + "Container />, initialState);\n    const component = container.find(" + component + ");\n    expect(component.find('h1').text()).toEqual('" + component + " page');\n  });\n});\n\n";
});
