import { injectGlobal } from 'emotion';

injectGlobal`
  html {
    overflow: hidden;
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
