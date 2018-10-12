import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plain from 'slate-plain-serializer';
import { actions as editorActions, selectors as noteSelectors } from '../../redux/modules/editor';

import Editor from '../../components/Editor/index';

class EditorStatefulContainer extends Component {
  render() {
    console.log('editor', this.props.currentNote);
    return <Editor content={this.props.editorContent} onChange={this.props.updateEditorContent} />;
  }
}

const mapStateToProps = state => ({
  editorContent: noteSelectors.getEditorContent(state)
});

const mapDispatchToProps = dispatch => ({
  updateEditorContent: content => dispatch(editorActions.updateEditorContent(content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorStatefulContainer);
