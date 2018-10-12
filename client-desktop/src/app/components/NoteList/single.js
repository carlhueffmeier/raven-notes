import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actions as currentNoteActions,
  selectors as currentNoteSelectors
} from '../../redux/modules/currentNote';

import {
  SingleNoteContainer,
  SubContainer,
  Day,
  Note,
  Title,
  Body,
  Author,
  Divider
} from './styles';
const moment = require('moment');

class SingleNote extends Component {
  render() {
    const note = this.props.note;
    return (
      <SingleNoteContainer onClick={() => this.props.selectCurrentNote(this.props.note)}>
        <Divider />
        <SubContainer>
          <Day>{moment(this.props.note.createdAt).format('MMM Do YY')}</Day>

          <Note>
            <Title>
              {this.props.note.body.length > 10
                ? this.props.note.body.slice(0, 5) + ' 🚀'
                : this.props.note.body}
            </Title>
            <Body>{note.body}</Body>
            <Author>
              <span>Written by</span> {note.author.name}
            </Author>
          </Note>
        </SubContainer>
      </SingleNoteContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectCurrentNote: id => dispatch(currentNoteActions.selectCurrentNote(id))
});

export default connect(
  null,
  mapDispatchToProps
)(SingleNote);
