import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import ModalDialog from '../ModalDialog';
import { Title, StyledIdeaIcon } from './styles';
import CreateGroupContainer from '../../containers/CreateGroupContainer';

class CreateGroupDialog extends Component {
  static propTypes = {
    isVisible: bool,
    onDismiss: func
  };

  render() {
    const { isVisible, onDismiss } = this.props;
    return (
      <ModalDialog isVisible={isVisible} onDismiss={onDismiss}>
        <StyledIdeaIcon />
        <Title>Let's create a new workspace!</Title>
        <CreateGroupContainer />
      </ModalDialog>
    );
  }
}

export default CreateGroupDialog;
