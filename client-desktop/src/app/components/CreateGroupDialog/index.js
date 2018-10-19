import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import ModalDialog from '../ModalDialog';
import idea from '../../../assets/idea.svg';
import { Title } from './styles';
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
        <img src={idea} alt="idea" style={{ height: '15vh' }} />
        <Title>Let's create a new workspace!</Title>
        <CreateGroupContainer />
      </ModalDialog>
    );
  }
}

export default CreateGroupDialog;
