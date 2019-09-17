import styled from 'styled-components';
import { Row } from '@bootstrap-styled/v4';

const ContentStyled = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #fff;
`;

const TitleStyled = styled.h1`
  font-size: 6rem;
  color: #fff;
`;

const ParagraphStyled = styled.p`
  font-size: 0.8rem;
  color: #6ae0ff;
`;

export { ContentStyled, TitleStyled, ParagraphStyled };
