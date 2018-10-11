import React, { Component } from 'react';

import SingleNote from './single';
import SearchBar from '../SearchBar/index';

import { NoteListContainer } from './styles';


class NoteList extends Component {

  render() {
    return (
            <NoteListContainer>
              <SearchBar />
              {/* Change with new props ↪️ */}
              {/* {this.props.notes.map(note => <SingleNote key={note.id} note={note} />)} */}
              <SingleNote />
            </NoteListContainer>
    );
  }
}

export default NoteList;
