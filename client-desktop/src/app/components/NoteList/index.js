import React, { Component } from 'react';
import {array} from 'prop-types';
import SingleNote from './single';
import { NoteListContainer } from './styles';


class NoteList extends Component {
  static propTypes = {
    notes: array
  }

  // If no note is open on the right side, show the list width 100%, if not show the list 25vw is now.
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
