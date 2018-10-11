import React, { Component } from 'react';

import { SingleNoteContainer, SubContainer, Day, Note, Title, Body, Author, Divider } from './styles';
const moment = require('moment');


class SingleNote extends Component {

  render() {
    const note = this.props.note
    return (
      <SingleNoteContainer>
        <Divider />
        <SubContainer>
          <Day>
            {moment(this.props.note.createdAt).format("MMM Do YY")}

          </Day>

          <Note>
            <Title>
              {
                this.props.note.body.length > 10
                ?
                (this.props.note.body.slice(0,5) + ' 🚀')
                : this.props.note.body
              }
            </Title>
            <Body>{note.body}</Body>
            <Author><span>Written by</span> {note.author.name}</Author>
          </Note>
        </SubContainer>
      </SingleNoteContainer>
    );
  }
}

export default SingleNote;
