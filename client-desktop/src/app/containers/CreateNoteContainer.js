import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as noteActions } from '../redux/modules/note';

class CreateNoteContainer extends Component {
  render() {
    return (
      <button onClick={() => this.props.createNote()}>
        <span role="img" aria-label="monkey">
          🆕
        </span>
      </button>
    );
  }
}

const mapDispatchToProps = {
  createNote: noteActions.createNote
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNoteContainer);
