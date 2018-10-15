import React, { Component } from 'react';
import SingleNote from './single';
import SearchBar from '../SearchBar/index';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { NoteListContainer, SearchAndCreateContainer, NoteListWrapper } from './styles';

class NoteList extends Component {
  render() {
    const { notes, selectNote } = this.props;
    return (
      <NoteListContainer>
        <SearchAndCreateContainer>
          <SearchBar />
          <CreateNoteContainer />
        </SearchAndCreateContainer>
        <NoteListWrapper>
          {notes.map(note => (
            <SingleNote key={note.id} note={note} onClick={() => selectNote(note.id)} />
          ))}
        </NoteListWrapper>
      </NoteListContainer>
    );
  }
}

export default NoteList;
