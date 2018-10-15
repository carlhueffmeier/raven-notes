import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as noteSelectors } from '../redux/modules/note';
import { actions as currentNoteActions } from '../redux/modules/currentNote';
import NoteList from '../components/NoteList';
import { sortBy, dateDescending, prop } from '../lib/utils';

class NoteListContainer extends Component {

  state = {
    searchQuery: ''
  };

  onQueryChange = newQuery => {
    this.setState({ searchQuery: newQuery});
  };

  render() {
    const { notes, selectNote } = this.props;
    const noteFilter = new RegExp(this.state.searchQuery, 'i');
    const filteredNotes = notes.filter(note => noteFilter.test(note.contentText));

    return (
      <NoteList notes={filteredNotes}
        selectNote={selectNote}
        onQueryChange={this.onQueryChange} />
    );
  }
}

function mapStateToProps(state) {
  const groupNotes = noteSelectors.getCurrentGroupNotesWithAuthor(state);
  return {
    notes: sortBy(dateDescending(prop('updatedAt')), groupNotes)
  };
}

const mapDispatchToProps = {
  selectNote: currentNoteActions.selectNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListContainer);
