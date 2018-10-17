import styled from 'react-emotion';

const NoSelection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 100%;
  background-color: ${props => props.theme.colors.plight};
  & p{
    opacity: 0.4;
  }
`;

export { NoSelection };
