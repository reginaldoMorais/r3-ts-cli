import React from 'react';

import { SalutationStyled, SpanStyled, LinkBoldStyled } from './SalutationStyle';
import IntlMessages from '../Intl-messages/IntlMessages';

export default () => (
  <SalutationStyled>
    <SpanStyled>
      <IntlMessages id="salutation.text" />
    </SpanStyled>
    <SpanStyled>
      <LinkBoldStyled
        href="https://github.com/reginaldoMorais/r3-ts-cli"
        target="_blank">
          https://github.com/reginaldoMorais/r3-ts-cli
        </LinkBoldStyled>
    </SpanStyled>
  </SalutationStyled>
);
