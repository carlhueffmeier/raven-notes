import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as noteActions } from '../redux/modules/note';

import { CreateButton } from './../components/SearchBar/styles';

class CreateNoteContainer extends Component {
  render() {
    return (
      <CreateButton onClick={() => this.props.createNote({ body: 'Ello' })}>
        new note
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
