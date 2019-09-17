import '../../src/app/assets/styles/scss/main.scss';

import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../Provider.tsx';
import Content from '../../src/app/view/components/content/Content.tsx';
import styled from 'styled-components';

const ContentStyled = styled(Content)`
  background-color: #ddd;
  height: calc(100vh / 2);
`;

storiesOf('Content', module)
  .add('with simple', () => (
    <Provider>
      <ContentStyled>
        <h1>Hello World</h1>
      </ContentStyled>
    </Provider>
  ))
  .add('with fluid', () => (
    <Provider>
      <ContentStyled fluid={true}>
        <h1>Hello World</h1>
      </ContentStyled>
    </Provider>
  ));
