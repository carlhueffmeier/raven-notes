import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as noteSelectors } from '../redux/modules/note';
import { actions as currentNoteActions } from '../redux/modules/currentNote';
import NoteList from '../components/NoteList';
import { sortBy, dateDescending, prop } from '../lib/utils';
import { actions as layoutActions } from '../redux/modules/layout';

class NoteListContainer extends Component {
  render() {
    const { notes, selectNote, changeLayout } = this.props;
    return <NoteList notes={notes} selectNote={selectNote} changeLayout={changeLayout} />;
  }
}

function mapStateToProps(state) {
  const groupNotes = noteSelectors.getCurrentGroupNotesWithAuthor(state);
  return {
    notes: sortBy(dateDescending(prop('updatedAt')), groupNotes)
  };
}

const mapDispatchToProps = {
  selectNote: currentNoteActions.selectNote,
  changeLayout: layoutActions.changeLayout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListContainer);

