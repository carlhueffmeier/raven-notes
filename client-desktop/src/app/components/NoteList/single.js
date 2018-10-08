import React, { Component } from 'react';
import { object } from 'prop-types';

import { SingleNoteContainer } from './styles';
import { h1, h5, p } from '../../shared/typography';

class SingleNote extends Component {
  static propTypes = {
    note: object.isRequired
  }

  render() {
    const {note} = this.props;
    return (
      <SingleNoteContainer>
        <div style={h1}>{note.title}</div>
        <div style={p}>{note.body}</div>

        <div>
          <div>img here</div>
          <div style={h5}>{note.author && note.author.userName}</div>
        </div>

      </SingleNoteContainer>
    );
  }
}

export default SingleNote;