import styled from 'styled-components';
import Content from '../shared/content/Content';

const ContentStyled = styled(Content)`
  height: calc(100vh - calc(150px / 2));
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { ContentStyled };
