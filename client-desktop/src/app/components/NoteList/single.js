import React, { Component } from 'react';

import { SingleNoteContainer, SubContainer, Day, Note, Title, Body, Author, Divider } from './styles';
const moment = require('moment');


class SingleNote extends Component {

  render() {
    return (
      <SingleNoteContainer>
        <Divider />
        <SubContainer>
          <Day>
            {moment(this.props.note.createdAt).format("MMM Do YY")}

          </Day>

          <Note>
            <Title>Title</Title>
            <Body>{this.props.note.body}</Body>
            <Author><span>Written by</span> {this.props.note.author.name}</Author>
          </Note>
        </SubContainer>
      </SingleNoteContainer>
    );
  }
}

export default SingleNote;
