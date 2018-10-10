import React, { Component } from 'react';
import { object } from 'prop-types';
import { Mutation } from 'react-apollo';
import { Value } from 'slate'
import { POST_CURRENT_NOTE } from '../../graphql/mutations';
import Plain from 'slate-plain-serializer'

import { SingleNoteContainer, SubContainer, Day, Note, Title, Body, Author, Divider } from './styles';
const moment = require('moment');


class SingleNote extends Component {
  static propTypes = {
    note: object.isRequired
  }

  render() {
    const {note} = this.props;
    return (
      <Mutation mutation={POST_CURRENT_NOTE} variables={{body: note}}>
        {(currentNote, {data}) => (
          <SingleNoteContainer onClick={currentNote}>
            <Divider />
            <SubContainer>
              <Day>
                {moment(note.createdAt).format("MMM Do YY")}
              </Day>

              <Note>
                <Title>{note.title}</Title>
                <Body>{Plain.serialize(Value.fromJSON(JSON.parse(note.body)))}</Body>
                <Author><span>Written by</span> {note.author && note.author.userName}</Author>
              </Note>
            </SubContainer>
          </SingleNoteContainer>
        )}
      </Mutation>

    );
  }
}

export default SingleNote;
