import React from 'react';

import { TitleStyled, CharacterNameStyled, TextBoldStyled, PlaceholderStyled } from './CharacterStyle';
import { IOwnProps } from './types';
import StringUtils from '../../../../utils/string';
import If from '../if/If';
import IntlMessages from '../Intl-messages/IntlMessages';

export default ({ character }: IOwnProps) => (
  <TitleStyled>
    <If test={StringUtils.isNotEmpty(character.name) && StringUtils.isNotEmpty(character.starship.name)} component={<PlaceholderStyled />}>
      <span><IntlMessages id="character.iam" />{' '}</span>
      <CharacterNameStyled>
        {character.name}
        {' '}
      </CharacterNameStyled>
      <span>
        <IntlMessages id="character.iam-pilot" values={{starship: <TextBoldStyled>{character.starship.name}</TextBoldStyled>}} />
      </span>
    </If>
  </TitleStyled>
);
