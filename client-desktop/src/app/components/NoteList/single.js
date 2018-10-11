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
            {/* {moment(note.createdAt).format("MMM Do YY")} */}
            8th Oct
          </Day>

          <Note>
            <Title>Title</Title>
            <Body>Body</Body>
            <Author><span>Written by</span> Someone.</Author>
          </Note>
        </SubContainer>
      </SingleNoteContainer>
    );
  }
}

export default SingleNote;
