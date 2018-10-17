import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

function injectGlobalStyles({ background = '#FFF' } = {}) {
  console.log(background);
  return injectGlobal`
    html {
      overflow: hidden;
      background: ${background};
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
  `;
}

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

export { Header, injectGlobalStyles };
