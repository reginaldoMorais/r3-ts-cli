import styled from 'styled-components';

const InfoStyled = styled.div`
  font-family: 'Roboto';
  font-weight: 100;
  position: absolute;
  top: 10vh;
  right: 10vh;
  z-index: 1;
  color: #fff;
  padding: 1rem;
  font-size: .8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: right;
  width: 300px;

  background: rgba(255,255,255,0.05);

  @media (max-width: 576px) {
    right: calc((100vw / 2) - (300px / 2));
  }
`;

const ImageStyled = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
`;

const TextBoldStyled = styled.div`
  font-weight: 700;
`;

export { InfoStyled, ImageStyled, TextBoldStyled };
