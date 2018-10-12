import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as currentNoteActions } from '../../redux/modules/currentNote';

import {
  SingleNoteContainer,
  SubContainer,
  Day,
  Note,
  Title,
  Body,
  Author,
  Divider,
  Hour
} from './styles';
const moment = require('moment');

class SingleNote extends Component {
  render() {
    const note = this.props.note;
    return (
      <SingleNoteContainer onClick={() => this.props.selectCurrentNote(this.props.note)}>
        <Divider />
        <SubContainer>
          <Day>
            {moment(this.props.note.createdAt).format('Do MMM')}
            <Hour>{moment(this.props.note.createdAt).format('hh:mm a')}</Hour>
          </Day>

          <Note>
            <Title>
              {this.props.note.body && this.props.note.body.length > 10
                ? this.props.note.body.slice(0, 10) + '... 🚀'
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

const mapDispatchToProps = {
  selectCurrentNote: currentNoteActions.selectCurrentNote
};

export default connect(
  null,
  mapDispatchToProps
)(SingleNote);
