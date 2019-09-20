export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import React, { Component } from 'react';

import { Container } from '@bootstrap-styled/v4';
import { TitleStyled } from './${component}Style';
import { IStateProps, IDispatchProps, IOwnProps } from './types';

type IProps = IStateProps & IDispatchProps & IOwnProps;

class ${component} extends Component<IProps> {
  render() {
    return (
      <Container>
        <TitleStyled>${component} page</TitleStyled>
      </Container>
    );
  }
}

export default Home;

`;
};
