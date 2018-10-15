import React, { Component } from 'react';
import SingleNote from './single';
import SearchBar from '../SearchBar/index';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { NoteListContainer, SearchAndCreateContainer } from './styles';

class NoteList extends Component {
  render() {
    const { notes, selectNote, onQueryChange } = this.props;
    return (
      <NoteListContainer>
        <SearchAndCreateContainer>
          <SearchBar onChange={onQueryChange}/>
          <CreateNoteContainer />
        </SearchAndCreateContainer>
        <div>
          {notes.map(note => (
            <SingleNote key={note.id} note={note} onClick={() => selectNote(note.id)} />
          ))}
        </div>
      </NoteListContainer>
    );
  }
}

export default NoteList;
