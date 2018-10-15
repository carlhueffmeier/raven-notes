import React, { Component } from 'react';
import moment from 'moment';
import { createNoteTitle, createNoteSnippet } from '../../lib/noteUtils';
import { SizeMe } from 'react-sizeme';
import {
  SingleNoteContainer,
  SubContainer,
  Day,
  RowNote,
  RowTitle,
  RowBody,
  RowAuthor,
  Divider,
  Note,
  Title,
  Body,
  Author
} from './styles';

class SingleNote extends Component {
  render() {
    const { note, onClick } = this.props;
    const title = createNoteTitle(note);
    const snippet = createNoteSnippet(note);
    return (
      <SizeMe>
        {({ size }) => (
          <SingleNoteContainer onClick={onClick}>
            <Divider />
            <SubContainer>
              <Day>{moment(note.createdAt).format('MMM Do')}</Day>
              {size.width > 300 ? (
                <RowNote>
                  <RowTitle>{title}</RowTitle>
                  <RowBody>{snippet}</RowBody>
                  <RowAuthor>
                    <span>Written by</span> {note.author.name}
                  </RowAuthor>
                </RowNote>
              ) : (
                <Note>
                  <Title>{title}</Title>
                  <Body>{snippet}</Body>
                  <Author>
                    <span>Written by</span> {note.author.name}
                  </Author>
                </Note>
              )}
            </SubContainer>
          </SingleNoteContainer>
        )}
      </SizeMe>
    );
  }
}

export default SingleNote;
