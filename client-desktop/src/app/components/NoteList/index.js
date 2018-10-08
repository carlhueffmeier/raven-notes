import React, { Component } from 'react';
import {array} from 'prop-types';
import SingleNote from './single';
import { NoteListContainer } from './styles';


class NoteList extends Component {
  static propTypes = {
    notes: array
  }


  render() {
    const { notes } = this.props;
    return (
      <NoteListContainer>
        {notes.map(note => <SingleNote note={note} />)}
      </NoteListContainer>
    );
  }
}

export default NoteList;
