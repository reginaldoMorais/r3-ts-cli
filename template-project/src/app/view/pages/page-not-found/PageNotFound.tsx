import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container } from '@bootstrap-styled/v4';
import { ContentStyled, TitleStyled, ParagraphStyled } from './PageNotFoundStyle';
import IntlMessages from '../../components/Intl-messages/IntlMessages';

class PageNotFound extends Component {
  render() {
    return (
      <Container>
        <ContentStyled>
          <TitleStyled>404</TitleStyled>
          <ParagraphStyled><IntlMessages id="page-not-Found-label" /></ParagraphStyled>
          <Link to="/"><IntlMessages id="page-not-Found-return" /></Link>
        </ContentStyled>
      </Container>
    );
  }
}

export default PageNotFound;
