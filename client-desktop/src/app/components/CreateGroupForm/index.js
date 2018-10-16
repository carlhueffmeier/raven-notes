import React, { Component } from 'react';
import { func } from 'prop-types';
import { StyledForm, SubmitButton, Input, InputContainer } from './styles';

export default class CreateGroupForm extends Component {
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

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            name="name"
            placeholder="🚀 Workspace name"
            onChange={this.handleInputChange}
            value={this.state.input}
          />
        </InputContainer>
        <SubmitButton>Create workspace</SubmitButton>
      </StyledForm>
    );
  }
}
