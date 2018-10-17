import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as editorActions, selectors as noteSelectors } from '../redux/modules/editor';
import { selectors as currentNoteSelectors } from '../redux/modules/currentNote';
import { selectors as authenticationSelectors } from '../redux/modules/authentication';
import Editor from '../components/Editor';
import styled from 'react-emotion';

const NoSelection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 100%;
  color: darkgrey;
`;

class EditorContainer extends Component {
  render() {
    const { currentNote, isAuthor, editorContent, updateEditorContent } = this.props;
    return currentNote ? (
      <Editor content={editorContent} onChange={updateEditorContent} readOnly={!isAuthor} />
    ) : (
      <NoSelection>
        No note selected{' '}
        <span role="img" aria-labelledby="babychick">
          🐣
        </span>
      </NoSelection>
    );
  }
}

function mapStateToProps(state) {
  const currentNote = currentNoteSelectors.getCurrentNote(state);
  const currentUser = authenticationSelectors.getCurrentUser(state);
  return {
    editorContent: noteSelectors.getEditorContent(state),
    currentNote,
    isAuthor: currentNote && currentNote.author === currentUser.id
  };
}

const mapDispatchToProps = {
  updateEditorContent: editorActions.updateEditorContent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorContainer);
