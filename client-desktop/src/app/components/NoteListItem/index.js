import React, { Component } from 'react';
import moment from 'moment';
import { createNoteTitle, createNoteSnippet } from '../../lib/noteUtils';
import { SizeMe } from 'react-sizeme';
import {
  SingleNoteContainer,
  SubContainer,
  Day,
  RowDay,
  RowNote,
  RowTitle,
  RowBody,
  RowAuthor,
  Divider,
  Note,
  Title,
  Body,
  EmptySnippet,
  Author
} from './styles';

class NoteListItem extends Component {
  render() {
    const { note, onClick, active } = this.props;
    const listItemProps = {
      title: createNoteTitle(note),
      snippet: createNoteSnippet(note),
      author: note.author,
      createdAt: note.createdAt,
      active
    };
    return (
      <SingleNoteContainer onClick={onClick}>
        <Divider />
        <SizeMe>
          {({ size }) =>
            size.width < 300 ? (
              <CompactListItem {...listItemProps} />
            ) : (
              <ExpandedListItem {...listItemProps} />
            )
          }
        </SizeMe>
      </SingleNoteContainer>
    );
  }
}

function CompactListItem(props) {
  const { title, snippet, author, createdAt, active } = props;
  return (
    <SubContainer>
      <Day>{moment(createdAt).format('MMM D')}</Day>
      <Note>
        <Title active={active}>{title ? title : 'No title'}</Title>
        <Body>
          {snippet ? snippet.substring(0, 100) + '...' : <EmptySnippet>empty</EmptySnippet>}
        </Body>
        <Author>
          <span>Written by</span> {author.name}
        </Author>
      </Note>
    </SubContainer>
  );
}

function ExpandedListItem(props) {
  const { title, snippet, author, createdAt, active } = props;
  return (
    <SubContainer>
      <RowDay>{moment(createdAt).format('MMM Do')}</RowDay>
      <RowNote>
        <RowTitle active={active}>{title ? title : 'No title'}</RowTitle>
        <RowBody>
          {snippet ? snippet.substring(0, 300) + '...' : <EmptySnippet>empty</EmptySnippet>}
        </RowBody>
        <RowAuthor>
          <span>Written by</span> {author.name}
        </RowAuthor>
      </RowNote>
    </SubContainer>
  );
}

export default NoteListItem;
