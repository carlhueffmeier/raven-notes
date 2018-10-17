import React, { Component } from 'react';
import { func } from 'prop-types';
import { StyledForm, SubmitButton, BigInput, InputContainer } from './styles';
import { FormError } from '../../shared/formStyles';
import { isValidEmail } from '../../lib/formUtils';

class AddMemberForm extends Component {
  static propTypes = {
    onSubmit: func
  };

  state = {
    email: ''
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  isValid() {
    return isValidEmail(this.state.email);
  }

  render() {
    const { loading, error } = this.props;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <InputContainer>
          <BigInput
            type="email"
            name="email"
            placeholder="🤖 Member name"
            onChange={this.handleInputChange}
            value={this.state.input}
            required
            showValidationHints
          />
        </InputContainer>
        {error && <FormError>{error}</FormError>}
        <SubmitButton disabled={loading || !this.isValid()}>
          {loading ? 'Loading...' : 'Add Member'}
        </SubmitButton>
      </StyledForm>
    );
  }
}

export default AddMemberForm;
