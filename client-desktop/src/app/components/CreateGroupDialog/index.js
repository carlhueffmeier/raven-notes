import React, { Component } from 'react';
import { bool } from 'prop-types';
import PopUp from 'react-base-popup';
import idea from '../../../assets/idea.svg';
import { PopUpContainer, PopContentContainer, PopUpClose, TitlePop } from './styles';
import CreateGroupContainer from '../../containers/CreateGroupContainer';

export default class CreateGroupDialog extends Component {
  static propTypes = {
    isVisible: bool
  };

  render() {
    const { isVisible, onDismiss } = this.props;
    return (
      <PopUp disable pop={isVisible} popup={{ borderRadius: '30px', height: '50vh' }}>
        <PopUpContainer>
          <PopUpClose onClick={onDismiss}>
            <span role="img" aria-label="close">
              X
            </span>
          </PopUpClose>
          <PopContentContainer>
            <img src={idea} alt="idea" style={{ height: '15vh' }} />
            <TitlePop>Let's create a new workspace!</TitlePop>
            <CreateGroupContainer />
          </PopContentContainer>
        </PopUpContainer>
      </PopUp>
    );
  }
}
