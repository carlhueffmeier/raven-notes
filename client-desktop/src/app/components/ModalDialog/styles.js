import styled from 'react-emotion';

const PopUpContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const PopUpClose = styled('div')`
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  line-height: 1.8vw;
  & span {
    cursor: pointer;
    margin: 20px;
    top: 0;
    right: 0;
    position: absolute;
    font-weight: 900;
  }
`;

const PopContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitlePop = styled('h1')`
  font-size: 1.4em;
  margin-top: 40px;
  font-weight: 800;
`;

const InputContainer = styled('div')`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Input = styled('input')`
  width: 50%;
  flex-direction: row;
  margin: 0px 15px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  color: black;
  border: none;
  border-bottom: 1.2px solid ${props => props.theme.colors.primary};
  padding: 5px;
  font-size: 1.4em;
  font-weight: 400;
  :focus {
    outline: none;
  }
`;

const ButtonPop = styled('button')`
  border: none;
  text-transform: uppercase;
  padding: 20px;
  font-weight: 800;
  font-size: 0.8em;
  cursor: pointer;
  color: white;
  border-radius: 100px;
  :focus {
    outline: none;
  }
  margin: 20px;
  background-color: ${props => props.theme.colors.primary};
`;

export {
  PopUpContainer,
  PopContentContainer,
  PopUpClose,
  Input,
  TitlePop,
  ButtonPop,
  InputContainer
};
