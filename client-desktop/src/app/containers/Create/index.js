import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as noteActions, selectors as noteSelectors } from '../../redux/modules/note';

import NoteList from '../../components/NoteList/index';

class Create extends Component {

  // componentDidMount() {
  //   this.props.fetchNotes()
  // }

  fetchAndCreate = () => {
    this.props.createNote()
    this.props.fetchNotes()
  }

  render() {
    return (
      <div onClick={this.fetchAndCreate}>🙊</div>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = () => ({
  createNote: noteActions.createNote
})

export default connect (mapStateToProps, mapDispatchToProps)(Create);
