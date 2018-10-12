import styled from 'react-emotion';

const ButtonContainer = styled('div')`
  position: fixed;
  right: 0;
  bottom: 2vh;
  background-color: #f7f6f3;
  width: 12vh;
  z-index: 100;
  padding: 6px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const LayoutSwitchButton = styled('button')`
  border: none;
  display: flex;
  background-color: #f7f6f3;
  padding: 5px;
  :focus {
    outline: none;
  }

  :nth-child(1) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 90vw;
    width: 10vh;
  }
  :nth-child(2) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10vh;
    left: 90vw;
  }
  :nth-child(3) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10vh;
    left: 90vw;
  }
`;

const Img = styled('img')`
  width: 5vw;
`;

export { ButtonContainer, LayoutSwitchButton, Img };
