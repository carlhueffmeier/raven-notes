import React, { Component } from 'react';
import { Container, StyledBrandIcon, Title, SubTitle, TitleWrapper } from './styles';
import SigninContainer from '../../containers/SigninContainer';
import SignupContainer from '../../containers/SignupContainer';

class SigninPage extends Component {
  state = {
    userHasAccount: false
  };

  toggleForm = () => {
    this.setState(state => ({ userHasAccount: !state.userHasAccount }));
  };

  render() {
    const { userHasAccount } = this.state;
    return (
      <Container>
        <StyledBrandIcon />
        <div>
          <TitleWrapper>
            <Title>Welcome to Raven!</Title>
            <SubTitle>Collaborative note-taking without fuss</SubTitle>
          </TitleWrapper>
          {userHasAccount ? (
            <SigninContainer goToSignup={this.toggleForm} />
          ) : (
            <SignupContainer goToSignin={this.toggleForm} />
          )}
        </div>
      </Container>
    );
  }
}

export default SigninPage;
