import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { createNoteTitle, createNoteSnippet } from '../../lib/noteUtils';
import {
  SingleNoteContainer,
  SubContainer,
  Day,
  Divider,
  Note,
  Title,
  Body,
  EmptySnippet,
  Author
} from './styles';

class NoteListItem extends Component {
  render() {
    const { note, onClick, active, spacious } = this.props;
    const listItemProps = {
      title: createNoteTitle(note),
      snippet: createNoteSnippet(note),
      author: note.author,
      createdAt: note.createdAt,
      active,
      spacious
    };
    return (
      <SingleNoteContainer onClick={onClick}>
        <Divider />
        <SubContainer>
          <ListItem {...listItemProps} />
        </SubContainer>
      </SingleNoteContainer>
    );
  }
}

function ListItem(props) {
  const { title, snippet, author, createdAt, active, spacious } = props;
  const maxSnippetLength = spacious ? 300 : 100;
  return (
    <Fragment>
      <Day spacious={spacious}>{moment(createdAt).format('MMM D')}</Day>
      <Note spacious={spacious}>
        <Title spacious={spacious} active={active}>
          {title ? title : 'No title'}
        </Title>
        <Body spacious={spacious}>
          {snippet ? (
            snippet.substring(0, maxSnippetLength) + '...'
          ) : (
            <EmptySnippet>empty</EmptySnippet>
          )}
        </Body>
        <Author spacious={spacious}>
          <span>Written by</span> {author.name}
        </Author>
      </Note>
    </Fragment>
  );
}

export default NoteListItem;
