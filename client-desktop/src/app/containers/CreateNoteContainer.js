import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as noteActions } from '../redux/modules/note';
import { actions as layoutActions } from '../redux/modules/layout';
import { CreateButton, CreateImg } from './../components/SearchBar/styles';
import add from './../../assets/plus.svg';

class CreateNoteContainer extends Component {
  render() {
    return (
      <CreateButton
        onClick={() => {
          this.props.createNote();
          this.props.changeLayout('THREE_COLUMN_LAYOUT');
        }}
      >
        <CreateImg alt="Add Notes" src={add} />
      </CreateButton>
    );
  }
}

const mapDispatchToProps = {
  createNote: noteActions.createNote,
  changeLayout: layoutActions.changeLayout
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNoteContainer);
