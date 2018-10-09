import styled from 'react-emotion';

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Pane = styled('div')`
  width: ${props => props.width};
  display: flex;
`;

export { Container, Pane };
