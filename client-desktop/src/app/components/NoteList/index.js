import React, { Component } from 'react';
import SingleNote from './single';
import SearchBar from '../SearchBar/index';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { NoteListContainer, SearchAndCreateContainer, NoteListWrapper } from './styles';

import { constants as layoutConstants } from '../../redux/modules/layout';
import AddMembers from '../AddMembers';

class NoteList extends Component {
  render() {
    const { notes, selectNote, changeLayout, onQueryChange } = this.props;
    return (
      <NoteListContainer>
        <AddMembers currentGroup={this.props.currentGroup} />
        <SearchAndCreateContainer>
          <SearchBar onChange={onQueryChange} />
          <CreateNoteContainer />
        </SearchAndCreateContainer>
        <NoteListWrapper>
          {notes.map(note => (
            <SingleNote
              key={note.id}
              note={note}
              onClick={() => {
                selectNote(note.id);
                changeLayout(layoutConstants.THREE_COLUMN_LAYOUT);
              }}
            />
          ))}
        </NoteListWrapper>
      </NoteListContainer>
    );
  }
}

export default NoteList;
