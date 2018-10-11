import React, { Component } from 'react';
import {array} from 'prop-types';
import SingleNote from './single';
import { NoteListContainer } from './styles';


class NoteList extends Component {
  static propTypes = {
    notes: array
  }

  render() {
    console.log('note list notes', this.props.notes)
    return (
      <NoteListContainer>
        {this.props.notes.map(note => <SingleNote key={note.id} note={note} /> ) || <p>Ooops...</p>}
      </NoteListContainer>
    )
  }
}

export default NoteList;
