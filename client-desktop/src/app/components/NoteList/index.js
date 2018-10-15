import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleNote from './single';
import SearchBar from '../SearchBar/index';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { NoteListContainer, SearchAndCreateContainer } from './styles';

import { actions as layoutActions, constants as layoutConstants } from '../../redux/modules/layout';


class NoteList extends Component {
  render() {
    const { notes, selectNote, changeLayout } = this.props;

    return (
      <NoteListContainer>
        <SearchAndCreateContainer>
          <SearchBar />
          <CreateNoteContainer />
        </SearchAndCreateContainer>
        <div>
          {notes.map(note => (
            <SingleNote key={note.id} note={note} onClick={
              () => {
                selectNote(note.id)
                changeLayout(layoutConstants.THREE_COLUMN_LAYOUT)
              }} />
          ))}
        </div>
      </NoteListContainer>
    );
  }
}

export default connect (null, layoutActions)(NoteList);
