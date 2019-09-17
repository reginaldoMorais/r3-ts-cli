import styled from 'styled-components';

const TitleStyled = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  font-family: 'Roboto';
  font-weight: 100;
`;

const CharacterNameStyled = styled.span`
  font-size: 3rem;
  font-weight: 500;
`;

const TextBoldStyled = styled.span`
  font-weight: 500;
`;

const PlaceholderStyled = styled.div`
  background: rgba(255, 255, 255, .5);
  width: 300px;
  height: 100px;
  animation: blink 1s linear infinite;
  border-radius: .3rem;

  @keyframes blink{
    0%{opacity: .2;}
    50%{opacity: .5;}
    100%{opacity: .2;}
  }
`;

export { TitleStyled, CharacterNameStyled, TextBoldStyled, PlaceholderStyled };
