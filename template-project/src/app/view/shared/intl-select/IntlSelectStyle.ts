import styled from 'styled-components';

const SelectStyled = styled.div`
  font-size: .8rem;
  color: #6ae0ff;
`;

const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  font-size: .8rem;
`;

const LiStyled = styled.li`
    padding: 0 1rem;
    margin: .5rem 0;
    border-right: 1px solid #259cb9;

    &:last-child {
      border-right: 0 none;
    }
`;

const LinkActiveStyled = styled.a`
  color: #e437ec;
  font-weight: bold;
`;

export { SelectStyled, UlStyled, LiStyled, LinkActiveStyled };
