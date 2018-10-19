import React, { Component } from 'react';
import { func } from 'prop-types';
import {
  StyledSigninForm,
  Input,
  Button,
  SigninText,
  ButtonWrapper,
  FormError
} from '../../shared/formStyles';
import { isValidEmail, isValidPassword } from '../../lib/formUtils';

class SignupForm extends Component {
  static propTypes = {
    onSubmit: func
  };

  state = {
    name: '',
    email: '',
    password: ''
  };

  handleSubmit = event => {
    this.props.onSubmit(this.state);
    event.preventDefault();
  };

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  isValid() {
    const { email, password } = this.state;
    return isValidEmail(email) && isValidPassword(password);
  }

  render() {
    const { loading, error } = this.props;
    return (
      <StyledSigninForm onSubmit={this.handleSubmit}>
        <SigninText>
          Please, sign in to continue.
          <span role="img" aria-label="dancing">
            💃🏼
          </span>
        </SigninText>

        <Input
          name="name"
          onChange={this.handleFormChange}
          type="text"
          placeholder="Name"
          required
          showValidationHints
        />
        <Input
          name="email"
          onChange={this.handleFormChange}
          type="email"
          placeholder="Email"
          required
          showValidationHints
        />
        <Input
          name="password"
          onChange={this.handleFormChange}
          type="password"
          placeholder="Password"
          minLength="3"
          required
          showValidationHints
        />

        {error && <FormError>{error.message}</FormError>}

        <ButtonWrapper>
          <Button
            onClick={this.props.goToSignin}
            type="button"
            style={{ backgroundColor: 'transparent' }}
          >
            I already have an account
            <span role="img" aria-label="omg">
              ⭐️
            </span>
          </Button>
          <Button disabled={loading || !this.isValid()}>
            Sign up
            <span role="img" aria-label="spaceship">
              🚀
            </span>
          </Button>
        </ButtonWrapper>
      </StyledSigninForm>
    );
  }
}

export default SignupForm;
