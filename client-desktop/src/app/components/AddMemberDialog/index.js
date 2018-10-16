import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { Title } from '../CreateGroupDialog/styles';
import ModalDialog from '../ModalDialog';
import chatIcon from '../../../assets/chat.svg';
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
        <img src={chatIcon} alt="people chatting" style={{ height: '15vh' }} />
        <Title>Add a new member!</Title>
        <AddMemberContainer />
      </ModalDialog>
    );
  }
}

export default AddMemberDialog;
