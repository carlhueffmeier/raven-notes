import styled from 'react-emotion';

const NoSelection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 100%;
  background-color: ${props => props.theme.colors.plight};
  & > .text {
    color: ${props => props.theme.colors.text};
    opacity: 0.6;
    margin-right: 1rem;
  }
`;

export { NoSelection };
