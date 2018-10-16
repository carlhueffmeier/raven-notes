import React, { Component } from 'react';
import { bool } from 'prop-types';
import PopUp from 'react-base-popup';
import {
  PopUpContainer,
  PopContentContainer,
  PopUpClose,
  Input,
  TitlePop,
  ButtonPop,
  InputContainer
} from '../CreateGroupDialog/styles';

import addMember from '../../../assets/chat.svg';

export default class CreateMemberDialog extends Component {
  static propTypes = {
    isVisible: bool
  };

  state = {
    input: ''
  };

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { isVisible, onDismiss } = this.props;
    return (
      <PopUp disable pop={isVisible} popup={{ borderRadius: '30px', height: '380px' }}>
        <PopUpContainer>
          <PopUpClose onClick={onDismiss}>
            <span role="img" aria-label="x">
              X
            </span>
          </PopUpClose>

          <PopContentContainer>
            <img alt="members" src={addMember} style={{ height: '15vh' }} />
            <TitlePop>Add a new member!</TitlePop>

            <InputContainer>
              <Input
                type="text"
                placeholder="🤖 Member name"
                onChange={this.handleInputChange}
                value={this.state.input}
              />
            </InputContainer>

            <ButtonPop onClick={() => {}}>Add a member</ButtonPop>
          </PopContentContainer>
        </PopUpContainer>
      </PopUp>
    );
  }
}
