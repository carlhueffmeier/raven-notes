import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectors as noteSelectors } from '../../redux/modules/currentNote';

import Editor from '../../components/Editor/index';

class EditorStatefulContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchNotes()
  // }

  render() {
    console.log('editor', this.props.currentNote)
    return (
      <Editor currentNote={this.props.currentNote}/>
    );
  }
}

const mapStateToProps = (state) => ({
  currentNote: noteSelectors.getCurrentNote(state)
})

export default connect(mapStateToProps, null)(EditorStatefulContainer);
