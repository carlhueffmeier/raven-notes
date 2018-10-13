import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { actions as currentNoteActions } from '../../redux/modules/currentNote';
import { createNoteTitle, createNoteSnippet } from '../../lib/noteUtils';
import {
  SingleNoteContainer,
  SubContainer,
  Day,
  Note,
  Title,
  Body,
  Author,
  Divider,
  Hour
} from './styles';

class SingleNote extends Component {
  render() {
    const note = this.props.note;
    const title = createNoteTitle(note);
    const snippet = createNoteSnippet(note);
    return (
      <SingleNoteContainer onClick={() => {
        this.props.updateCurrentNote();
        this.props.selectCurrentNote(note)
        }}>
        <Divider />
        <SubContainer>
          <Day>{moment(note.createdAt).format('MMM Do YY')}</Day>
          <Note>
            <Title>{title}</Title>
            <Body>{snippet}</Body>
            <Author>
              <span>Written by</span> {note.author.name}
            </Author>
          </Note>
        </SubContainer>
      </SingleNoteContainer>
    );
  }
}


const mapDispatchToProps = {
  selectCurrentNote: currentNoteActions.selectCurrentNote,
};

export default connect(
  null,
  mapDispatchToProps
)(SingleNote);
