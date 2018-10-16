import React, { Component } from 'react';
import { func } from 'prop-types';
import { StyledForm, SubmitButton, Input, InputContainer } from './styles';

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

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <InputContainer>
          <Input
            type="email"
            name="email"
            placeholder="🤖 Member name"
            onChange={this.handleInputChange}
            value={this.state.input}
            required
          />
        </InputContainer>
        <SubmitButton>Add Member</SubmitButton>
      </StyledForm>
    );
  }
}

export default AddMemberForm;
