import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as editorActions, selectors as noteSelectors } from '../redux/modules/editor';
import Editor from '../components/Editor';

class EditorContainer extends Component {
  render() {
    return <Editor content={this.props.editorContent} onChange={this.props.updateEditorContent} />;
  }
}

const mapStateToProps = state => ({
  editorContent: noteSelectors.getEditorContent(state)
});

const mapDispatchToProps = {
  updateEditorContent: editorActions.updateEditorContent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorContainer);
