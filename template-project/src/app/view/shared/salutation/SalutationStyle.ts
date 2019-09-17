import styled from 'styled-components';

const SalutationStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6ae0ff;
  font-size: 0.8rem;
  font-family: 'Roboto';
  font-weight: 300;
  padding-top: 2rem;
  margin-top: 4rem;
  border-top: 1px solid #013541;
`;

const SpanStyled = styled.span`
  width: 70%;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const LinkBoldStyled = styled.a`
  font-weight: 700;

  :visited {
    color: #6ae0ff;
  }
`;

export { SalutationStyled, SpanStyled, LinkBoldStyled };
