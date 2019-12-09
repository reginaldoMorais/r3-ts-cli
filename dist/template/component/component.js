"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import React, { Component } from 'react';\n\nimport { Container } from '@bootstrap-styled/v4';\nimport { TitleStyled } from './" + component + "Style';\nimport { IStateProps, IDispatchProps, IOwnProps } from './types';\n\ntype IProps = IStateProps & IDispatchProps & IOwnProps;\n\nclass " + component + " extends Component<IProps> {\n  render() {\n    return (\n      <Container>\n        <TitleStyled>" + component + " page</TitleStyled>\n      </Container>\n    );\n  }\n}\n\nexport default " + component + ";\n";
});
