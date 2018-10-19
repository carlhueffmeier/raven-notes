import React, { Component } from 'react';
import { CreateButton, CreateImg } from './../../components/SearchBar/styles';
import add from '../../../assets/plus.svg';

class CreateNote extends Component {
  render() {
    return (
      <CreateButton onClick={this.props.handleClick}>
        <CreateImg alt="Add Notes" src={add} />
      </CreateButton>
    );
  }
}

export default CreateNote;
