// Sorry about the mess, flexbox is a beach. 🏝
// :->

import React, { Component } from 'react';
import {
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
} from './style';
import icon from '../../../assets/crow.svg';

class Signin extends Component {
  render() {
    return (
      <SigninContainer>
        <Img alt="crow" src={icon} />

        <div>
          <TitleWrapper>
            <Title>Welcome to Raven!</Title>
            <SubTitle>Collaborative note-taking without fuss</SubTitle>
          </TitleWrapper>

          <InputWrapper>
            <SigninText>
              Please, log in to continue.
              <span role="img" aria-label="dancing">
                💃🏼
              </span>
            </SigninText>

            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Password" />

            <ButtonWrapper>
              <Button>
                Log in
                <span role="img" aria-label="spaceship">
                  🚀
                </span>
              </Button>
              <Button style={{ backgroundColor: 'transparent' }}>
                I don't have an account
                <span role="img" aria-label="omg">
                  😱
                </span>
              </Button>
            </ButtonWrapper>
          </InputWrapper>

          <h5 style={{ textAlign: 'right', fontWeight: '300' }}>Forgot your password?</h5>
        </div>
      </SigninContainer>
    );
  }
}

export default Signin;
