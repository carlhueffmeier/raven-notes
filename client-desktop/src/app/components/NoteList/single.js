import React, { Component } from 'react';
import { object } from 'prop-types';

import { SingleNoteContainer, Title, Body, Author, Divider } from './styles';
import user from '../../../assets/man.svg'
import { h1, h5 } from '../../shared/typography';

class SingleNote extends Component {
  static propTypes = {
    note: object.isRequired
  }

  render() {
    const {note} = this.props;
    return (
      <SingleNoteContainer>
        <Divider />
        <Title>{note.title}</Title>
        <Body>{note.body}</Body>
        <Author><span>Written by</span> {note.author && note.author.userName}</Author>
      </SingleNoteContainer>
    );
  }
}

export default SingleNote;