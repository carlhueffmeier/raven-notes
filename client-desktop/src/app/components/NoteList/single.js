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
  SnippetFail,
  RowDay,
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
              {size.width > 300 ? (
                <React.Fragment>
                  <RowDay>{moment(note.createdAt).format('MMM Do')}</RowDay>
                  <RowNote>
                    <RowTitle>{title ? title : 'No title'}</RowTitle>
                    <RowBody>
                      {snippet ? snippet : <SnippetFail>~~ Empty note ~~</SnippetFail>}
                    </RowBody>
                    <RowAuthor>
                      <span>Written by</span> {note.author.name}
                    </RowAuthor>
                  </RowNote>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Day>{moment(note.createdAt).format('MMM Do')}</Day>
                  <Note>
                    <Title>{title}</Title>
                    <Body>{snippet}</Body>
                    <Author>
                      <span>Written by</span> {note.author.name}
                    </Author>
                  </Note>
                </React.Fragment>
              )}
            </SubContainer>
          </SingleNoteContainer>
        )}
      </SizeMe>
    );
  }
}

export default SingleNote;
