import styled from 'react-emotion';
import posed from 'react-pose';

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Pane = posed.div({});

const Pane = styled('div')`
  width: ${props => props.width};
  display: flex;
`;

export { Container, Pane };
