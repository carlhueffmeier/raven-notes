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

class SigninForm extends Component {
  static propTypes = {
    onSubmit: func
  };

  state = {
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
            onClick={this.props.goToSignup}
            type="button"
            style={{ backgroundColor: 'transparent' }}
          >
            I don't have an account
            <span role="img" aria-label="omg">
              😱
            </span>
          </Button>
          <Button disabled={loading || !this.isValid()}>
            Sign in
            <span role="img" aria-label="spaceship">
              🚀
            </span>
          </Button>
        </ButtonWrapper>
      </StyledSigninForm>
    );
  }
}

export default SigninForm;
