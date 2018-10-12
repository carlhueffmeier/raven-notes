import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as noteActions } from '../redux/modules/note';

import { CreateButton, CreateImg } from './../components/SearchBar/styles';
import add from './../../assets/plus.svg';

class CreateNoteContainer extends Component {
  render() {
    return (
      <CreateButton onClick={() => this.props.createNote({ body: 'Ello' })}>
        <CreateImg alt='Add Notes' src={add} />
      </CreateButton>
    );
  }
}

const mapDispatchToProps = {
  createNote: noteActions.createNote
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNoteContainer);
