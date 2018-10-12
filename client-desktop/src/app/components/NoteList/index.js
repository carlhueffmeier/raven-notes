import React, { Component } from 'react';
import SingleNote from './single';
import SearchBar from '../SearchBar/index';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { NoteListContainer, SearchAndCreateContainer } from './styles';

class NoteList extends Component {
  render() {
    return (
      <NoteListContainer>
        <SearchAndCreateContainer>
          <SearchBar />
          <CreateNoteContainer />
        </SearchAndCreateContainer>
        <div>
          {this.props.notes.map(note => (
            <SingleNote key={note.id} note={note} />
          ))}
        </div>
      </NoteListContainer>
    );
  }
}

export default NoteList;
