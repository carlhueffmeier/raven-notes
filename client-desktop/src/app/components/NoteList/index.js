import React, { Component } from 'react';
import SingleNote from './single';
import SearchBar from '../SearchBar/index';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { NoteListContainer } from './styles';

class NoteList extends Component {
  render() {
    return (
      <NoteListContainer>
        <SearchBar />
        <CreateNoteContainer />
        {this.props.notes.map(note => (
          <SingleNote key={note.id} note={note} />
        ))}
      </NoteListContainer>
    );
  }
}

export default NoteList;
