import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as noteSelectors } from '../redux/modules/note';
import { actions as currentNoteActions } from '../redux/modules/currentNote';
import NoteList from '../components/NoteList';

class NoteListContainer extends Component {
  render() {
    const { notes, selectNote } = this.props;
    return <NoteList notes={notes} selectNote={selectNote} />;
  }
}

const mapStateToProps = state => ({
  notes: noteSelectors.getCurrentGroupNotesWithAuthor(state)
});

const mapDispatchToProps = {
  selectNote: currentNoteActions.selectNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListContainer);
