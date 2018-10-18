import React, { Component } from 'react';
import NoteListItem from '../NoteListItem';
import SearchBar from '../SearchBar/index';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { Container, SearchAndCreateContainer, NoteListWrapper, NoNotesMessage } from './styles';
import { constants as layoutConstants } from '../../redux/modules/layout';
import GroupDetailsContainer from '../../containers/GroupDetailsContainer';

class NoteList extends Component {
  render() {
    const { notes, selectNote, changeLayout, onQueryChange, loading } = this.props;
    return (
      <Container>
        <GroupDetailsContainer />
        <SearchAndCreateContainer>
          <SearchBar onChange={onQueryChange} />
          <CreateNoteContainer />
        </SearchAndCreateContainer>
        <NoteListWrapper>
          {loading || notes.length > 0 ? (
            notes.map(note => (
              <NoteListItem
                key={note.id}
                note={note}
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
