import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as editorActions, selectors as noteSelectors } from '../redux/modules/editor';
import { selectors as currentNoteSelectors } from '../redux/modules/currentNote';
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
    const { currentNote } = this.props;
    return currentNote ? (
      <Editor content={this.props.editorContent} onChange={this.props.updateEditorContent} />
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

const mapStateToProps = state => ({
  editorContent: noteSelectors.getEditorContent(state),
  currentNote: currentNoteSelectors.getCurrentNote(state)
});

const mapDispatchToProps = {
  updateEditorContent: editorActions.updateEditorContent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorContainer);
