import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as noteActions, selectors as noteSelectors } from '../../redux/modules/note';
import { fetchNotes } from '../../redux/modules/note/actions';

import NoteList from '../../components/NoteList/index';
import Editor from '../../components/Editor/index';

class EditorStatefulContainer extends Component {

  componentDidMount() {
    this.props.fetchNotes()
  }

  render() {
    console.log('editor', this.props.notes)
    return (
      <Editor note={this.props.notes[0]}/>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: noteSelectors.getAllNotes(state)
})

const mapDispatchToProps = {
  fetchNotes: noteActions.fetchNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorStatefulContainer);
