import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as noteActions, selectors as noteSelectors } from '../../redux/modules/note';
import { fetchNotes } from '../../redux/modules/note/actions';

import NoteList from '../../components/NoteList/index';

class NoteListStatefulContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return <NoteList notes={this.props.notes} />;
  }
}

const mapStateToProps = state => ({
  notes: noteSelectors.getAllNotes(state)
});

const mapDispatchToProps = {
  fetchNotes: noteActions.fetchNotes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListStatefulContainer);
