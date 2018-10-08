import React, { Component } from 'react';
import { object } from 'prop-types';

import { SingleNoteContainer, SubContainer, Day, Note, Title, Body, Author, Divider } from './styles';

class SingleNote extends Component {
  static propTypes = {
    note: object.isRequired
  }

  render() {
    const {note} = this.props;
    return (
      <SingleNoteContainer>
        <Divider />
        <SubContainer>
          <Day>1 d</Day>

          <Note>
          {/* <Day>{note.createdAt}</Day> */}
            <Title>{note.title}</Title>
            <Body>{note.body}</Body>
            <Author><span>Written by</span> {note.author && note.author.userName}</Author>
          </Note>
        </SubContainer>
      </SingleNoteContainer>
    );
  }
}

export default SingleNote;