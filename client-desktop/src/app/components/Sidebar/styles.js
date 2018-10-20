import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  height: 100vh;
  overflow: auto;
  background-color: ${props => props.theme.colors.secondary};
  flex-flow: column wrap;
`;

export { Container };
