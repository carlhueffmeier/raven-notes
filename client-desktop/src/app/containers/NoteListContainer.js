import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as noteSelectors } from '../redux/modules/note';
import { actions as currentNoteActions } from '../redux/modules/currentNote';

import { actions as searchActions, selectors as searchSelectors } from '../redux/modules/search';
import NoteList from '../components/NoteList';
import { sortBy, dateDescending, prop } from '../lib/utils';
import { actions as layoutActions } from '../redux/modules/layout';

class NoteListContainer extends Component {
  render() {
    const { notes, selectNote, changeLayout, searchQuery } = this.props;
    const noteFilter = new RegExp(searchQuery, 'i');
    const filteredNotes = notes.filter(note => noteFilter.test(note.contentText));

    return (
      <NoteList
        notes={filteredNotes}
        selectNote={selectNote}
        changeLayout={changeLayout}
        onQueryChange={this.props.onQueryChange}
      />
    );
  }
}

function mapStateToProps(state) {
  const groupNotes = noteSelectors.getCurrentGroupNotesWithAuthor(state);

  return {
    notes: sortBy(dateDescending(prop('updatedAt')), groupNotes),
    searchQuery: searchSelectors.getCurrentSearch(state)
  };
}

const mapDispatchToProps = {
  selectNote: currentNoteActions.selectNote,
  changeLayout: layoutActions.changeLayout,
  onQueryChange: searchActions.changeQuery
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListContainer);
