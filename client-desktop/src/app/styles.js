import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

injectGlobal`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    min-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const P1 = styled('button')`
  position: absolute;
  top: 0;
  left: 90vw;
  height: 50px;
  background-color: lavender;
`

const P2 = styled('button')`
  position: absolute;
  top: 50;
  left: 90vw;
  height: 50px;
  background-color: pink;
`
const P3 = styled('button')`
  position: absolute;
  top: 100;
  left: 90vw;
  height: 50px;
  background-color: peachpuff;
`


export { P1, P2, P3 }




