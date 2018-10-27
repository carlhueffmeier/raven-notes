import styled from 'react-emotion';

const AppContainer = styled('div')`
  background-color: ${props => props.theme.colors.secondary};
`;

const Header = styled('header')`
  background-color: transparent;
  height: 23px;
  font-size: 0.8rem;
  width: 100%;
  z-index: 1000;
  position: fixed;
  -webkit-app-region: drag;
  top: 0;
  left: 0;
  line-height: 23px;
  text-align: center;
  font-weight: 600;
`;

export { AppContainer, Header };
