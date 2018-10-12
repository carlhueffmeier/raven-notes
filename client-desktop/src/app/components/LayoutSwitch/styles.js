import styled from 'react-emotion';

const ButtonContainer = styled('div')`
  background-color: red;
  width: 10vw;
  margin: 0;
`;

const LayoutSwitchButton = styled('button')`
  position: fixed;
  z-index: 100;

  :nth-child(1) {
    margin-top: 50px;
    left: 90vw;
    height: 10vh;
    background-color: lavender;
  }
  :nth-child(2) {
    margin-top: 120px;
    left: 90vw;
    height: 10vh;
    background-color: pink;
  }
  :nth-child(3) {
    margin-top: 200px;
    left: 90vw;
    height: 10vh;
    background-color: peachpuff;
  }
`;

export { ButtonContainer, LayoutSwitchButton };
