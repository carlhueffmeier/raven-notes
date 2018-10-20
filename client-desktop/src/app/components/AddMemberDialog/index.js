import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { Title, StyledChatIcon } from '../AddMemberDialog/styles';
import ModalDialog from '../ModalDialog';
import AddMemberContainer from '../../containers/AddMemberContainer';

class AddMemberDialog extends Component {
  static propTypes = {
    isVisible: bool,
    onDismiss: func
  };

  render() {
    const { isVisible, onDismiss } = this.props;
    return (
      <ModalDialog isVisible={isVisible} onDismiss={onDismiss}>
        <StyledChatIcon />
        <Title>Add a new member!</Title>
        <AddMemberContainer />
      </ModalDialog>
    );
  }
}

export default AddMemberDialog;
