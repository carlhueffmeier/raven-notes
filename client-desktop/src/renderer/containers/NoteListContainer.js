import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as noteSelectors } from '../redux/modules/note';
import { selectors as authenticationSelectors } from '../redux/modules/authentication';
import { selectors as currentGroupSelectors } from '../redux/modules/currentGroup';
import { selectors as currentNoteSelectors } from '../redux/modules/currentNote';
import { selectors as groupSelectors } from '../redux/modules/group';
import { actions as currentNoteActions } from '../redux/modules/currentNote';
import { actions as searchActions, selectors as searchSelectors } from '../redux/modules/search';
import NoteList from '../components/NoteList';
import { sortBy, dateDescending, prop } from '../lib/utils';
import { selectors as layoutSelectors, actions as layoutActions } from '../redux/modules/layout';

class NoteListContainer extends Component {
  render() {
    const {
      notes,
      currentNoteId,
      notesLoading,
      selectNote,
      currentLayout,
      changeLayout,
      searchQuery
    } = this.props;
    const noteFilter = new RegExp(searchQuery, 'i');
    const filteredNotes = notes.filter(note => noteFilter.test(note.contentText));

    return (
      <NoteList
        notes={filteredNotes}
        currentNoteId={currentNoteId}
        loading={notes.length === 0 && notesLoading}
        selectNote={selectNote}
        currentLayout={currentLayout}
        changeLayout={changeLayout}
        onQueryChange={this.props.onQueryChange}
        currentGroup={this.props.currentGroup}
      />
    );
  }
}

function mapStateToProps(state) {
  const groupNotes = noteSelectors.getCurrentGroupNotesWithAuthor(state);
  const allGroups = groupSelectors.getAllGroups(state);
  let currentGroupId = currentGroupSelectors.getCurrentGroupId(state);
  if (!currentGroupId && allGroups.length > 0) {
    currentGroupId = allGroups[0].id;
  }
  return {
    notes: sortBy(dateDescending(prop('updatedAt')), groupNotes),
    notesLoading: noteSelectors.getLoading(state) || authenticationSelectors.getLoading(state),
    searchQuery: searchSelectors.getCurrentSearch(state),
    currentGroup: groupSelectors.getGroupById(state, currentGroupId),
    currentNoteId: currentNoteSelectors.getCurrentNoteId(state),
    currentLayout: layoutSelectors.getCurrentLayout(state)
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
