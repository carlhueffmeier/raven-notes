import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as noteActions } from '../../redux/modules/note';

class Create extends Component {

  fetchAndCreate = () => {
    this.props.createNote()
    this.props.fetchNotes()
  }

  render() {
    return (
      <div onClick={this.fetchAndCreate}>
        <span role='img' aria-label='monkey'>🆕</span>
      </div>
    );
  }
}

const mapDispatchToProps = () => ({
  createNote: noteActions.createNote
})

export default connect (null, mapDispatchToProps)(Create);
