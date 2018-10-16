import styled from 'react-emotion';

const StyledSigninForm = styled('form')`
  height: 300px;
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
    flex-basis: 45%;
  }
  :nth-child(2) {
    flex-basis: 15%;
  }
`;

export { StyledSigninForm, Input, Button, SigninText, ButtonWrapper };
