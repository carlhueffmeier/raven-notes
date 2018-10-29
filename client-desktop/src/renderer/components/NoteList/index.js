import React, { Component } from 'react';
import NoteListItem from '../NoteListItem';
import SearchBar from '../SearchBar/index';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { Container, SearchAndCreateContainer, NoteListWrapper, NoNotesMessage } from './styles';
import { constants as layoutConstants } from '../../redux/modules/layout';
import GroupDetailsContainer from '../../containers/GroupDetailsContainer';

class NoteList extends Component {
  render() {
    const {
      notes,
      selectNote,
      currentNoteId,
      currentLayout,
      changeLayout,
      onQueryChange,
      loading
    } = this.props;
    const spacious = currentLayout === layoutConstants.TWO_COLUMN_LAYOUT;
    return (
      <Container>
        <GroupDetailsContainer spacious={spacious} />
        <SearchAndCreateContainer>
          <SearchBar onChange={onQueryChange} />
          <CreateNoteContainer />
        </SearchAndCreateContainer>
        <NoteListWrapper>
          {loading || notes.length > 0 ? (
            notes.map(note => (
              <NoteListItem
                key={note.id}
                active={note.id === currentNoteId}
                note={note}
                spacious={spacious}
                onClick={() => {
                  selectNote(note.id);
                  changeLayout(layoutConstants.THREE_COLUMN_LAYOUT);
                }}
              />
            ))
          ) : (
            <NoNotesMessage>
              <p className="text">No notes yet</p>
            </NoNotesMessage>
          )}
        </NoteListWrapper>
      </Container>
    );
  }
}

export default NoteList;
