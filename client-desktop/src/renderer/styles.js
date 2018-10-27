import { injectGlobal } from 'emotion';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i');
  @import url('https://fonts.googleapis.com/css?family=Grand+Hotel');

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
