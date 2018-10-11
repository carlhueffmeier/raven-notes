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

// this is not working
const Buttons = styled('div')`
  background-color: red;
  width: 10vw;
  margin: 0;
`
const P1 = styled('button')`
  position: absolute;
  margin-top: 50px;
  left: 90vw;
  height: 10vh;
  background-color: lavender;
`;

const P2 = styled('button')`
  position: absolute;
  margin-top: 120px;
  left: 90vw;
  height: 10vh;
  background-color: pink;
`;
const P3 = styled('button')`
  position: absolute;
  margin-top: 200px;
  left: 90vw;
  height: 10vh;
  background-color: peachpuff;
`;


export { P1, P2, P3, Buttons }




