import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { actions as currentNoteActions } from '../../redux/modules/currentNote';
import { createNoteTitle, createNoteSnippet } from '../../lib/noteUtils';
import { SizeMe } from 'react-sizeme';
import {
  SingleNoteContainer,
  SubContainer,
  Day,
  RowNote,
  RowTitle,
  RowBody,
  RowAuthor,
  Divider,
  Hour,
  Note,
  Title,
  Body,
  Author
} from './styles';

class SingleNote extends Component {
  render() {
    const note = this.props.note;
    const title = createNoteTitle(note);
    const snippet = createNoteSnippet(note);
    return (
      <SizeMe>
        {({ size }) => (
          <SingleNoteContainer
            onClick={() => {
              this.props.updateCurrentNote();
              this.props.selectCurrentNote(note);
            }}
          >
            <Divider />
            <SubContainer>
              <Day>{moment(note.createdAt).format('MMM Do YY')}</Day>
              {size.width > 300 ? (
                <RowNote>
                  <RowTitle>{title}</RowTitle>
                  <RowBody>{snippet}</RowBody>
                  <RowAuthor>
                    <span>Written by</span> {note.author.name}
                  </RowAuthor>
                </RowNote>
              ) : (
                <Note>
                  <Title>{title}</Title>
                  <Body>{snippet}</Body>
                  <Author>
                    <span>Written by</span> {note.author.name}
                  </Author>
                </Note>
              )}
            </SubContainer>
          </SingleNoteContainer>
        )}
      </SizeMe>
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
