import React, { Component } from 'react';
import moment from 'moment';
import { createNoteTitle, createNoteSnippet } from '../../lib/noteUtils';
import {
  SingleNoteContainer,
  SubContainer,
  Day,
  Note,
  Title,
  Body,
  Author,
  Divider
} from './styles';

class SingleNote extends Component {
  render() {
    const { note, onClick } = this.props;
    const title = createNoteTitle(note);
    const snippet = createNoteSnippet(note);
    return (
      <SingleNoteContainer onClick={onClick}>
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

export default SingleNote;
