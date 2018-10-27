import React, { Component } from 'react';
import { CreateButton } from './styles';
import { PlusIcon } from '../Icons';

class CreateNote extends Component {
  render() {
    return (
      <CreateButton onClick={this.props.handleClick}>
        <PlusIcon />
      </CreateButton>
    );
  }
}

export default CreateNote;
