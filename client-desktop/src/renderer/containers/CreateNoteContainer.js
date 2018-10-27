import React, { Component } from 'react';
import CreateNote from '../components/CreateNote';
import { connect } from 'react-redux';
import { actions as noteActions } from '../redux/modules/note';
import { actions as layoutActions } from '../redux/modules/layout';

class CreateNoteContainer extends Component {
  handleClick = () => {
    this.props.createNote();
    this.props.changeLayout('THREE_COLUMN_LAYOUT');
  };

  render() {
    return <CreateNote handleClick={this.handleClick} />;
  }
}

const mapDispatchToProps = {
  createNote: noteActions.createNote,
  changeLayout: layoutActions.changeLayout
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNoteContainer);
