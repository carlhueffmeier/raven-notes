import styled from 'react-emotion';

const SigninContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled('img')`
  width: 40%;
`;

const TitleWrapper = styled('div')`
  text-align: center;
  margin-bottom: 5vh;
`;

const Title = styled('h1')`
  font-size: 3em;
  margin: 0;
`;
const SubTitle = styled('h2')`
  font-size: 1.4em;
  font-weight: 300;
  margin: 0;
`;

const InputWrapper = styled('div')`
  /* background-color: #F7F6F3; */
  height: 200px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  text-align: center;
`;

const SigninText = styled('div')`
  font-size: 1.6em;
  font-weight: 300;
  margin-bottom: 5vh;
`;

const Input = styled('input')`
  margin: 0px 15px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: black;
  border: none;
  padding: 0.5em 1.5em 1.5em 0.8em;
  border-bottom: 1.2px solid #a8a497;
  text-transform: uppercase;
  :focus {
    outline: none;
  }
`;

const ButtonWrapper = styled('div')`
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled('button')`
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.6em;
  cursor: pointer;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  :nth-child(1) {
    flex-basis: 15%;
  }
  :nth-child(2) {
    flex-basis: 38%;
  }
`;

export {
  SigninContainer,
  Input,
  Button,
  InputWrapper,
  SigninText,
  ButtonWrapper,
  Img,
  Title,
  SubTitle,
  TitleWrapper
};
