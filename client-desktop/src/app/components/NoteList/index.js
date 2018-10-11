import React, { Component } from 'react';

import SingleNote from './single';
import SearchBar from '../SearchBar/index';
import Create from '../../containers/Create/index';

import { NoteListContainer } from './styles';


class NoteList extends Component {

  render() {
    console.log(this.props)
    return (
            <NoteListContainer onClick={() => console.log('click to open note into editor')}>
              <SearchBar />
              <Create fetchNotes={this.props.fetchNotes}/>
              {this.props.notes.map(note => <SingleNote key={note.id} note={note} />)}
            </NoteListContainer>
    );
  }
}

export default NoteList;
