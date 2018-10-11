import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as noteActions, selectors as noteSelectors } from '../../redux/modules/note';

class TestComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fetchNotes}>Load Notes</button>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <button onClick={() => this.props.createNote({ body: 'Hey there' })}>
          Create New Note
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: noteSelectors.getAllNotes(state)
  };
}

export default connect(
  mapStateToProps,
  noteActions
)(TestComponent);
