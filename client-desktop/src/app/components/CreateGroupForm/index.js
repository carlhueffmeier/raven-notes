import React, { Component } from 'react';
import { func } from 'prop-types';
import { StyledForm, SubmitButton, Input, InputContainer } from './styles';
import { FormError } from '../../shared/formStyles';

class CreateGroupForm extends Component {
  static propTypes = {
    onSubmit: func
  };

  state = {
    name: ''
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
    return this.state.name.length > 0;
  }

  render() {
    const { loading, error } = this.props;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            name="name"
            placeholder="🚀 Workspace name"
            onChange={this.handleInputChange}
            value={this.state.input}
            required
            showValidationHints
          />
        </InputContainer>
        {error && <FormError>{error}</FormError>}
        <SubmitButton disabled={loading || !this.isValid()}>
          {loading ? 'Loading...' : 'Create workspace'}
        </SubmitButton>
      </StyledForm>
    );
  }
}

export default CreateGroupForm;
