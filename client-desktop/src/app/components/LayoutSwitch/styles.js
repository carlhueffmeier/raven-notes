import styled from 'react-emotion';

const ButtonContainer = styled('div')`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: 0.5rem;
  display: flex;
`;

const LayoutSwitchButton = styled('button')`
  border: none;
  display: flex;
  padding: 0.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  font-size: 3rem;
  :focus {
    outline: none;
  }
`;

export { ButtonContainer, LayoutSwitchButton };
