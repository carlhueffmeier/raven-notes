import React, { Component } from 'react';
import { bool } from 'prop-types';
import PopUp from 'react-base-popup';
import idea from '../../../assets/idea.svg';
import {
  PopUpContainer,
  PopContentContainer,
  PopUpClose,
  Input,
  TitlePop,
  ButtonPop,
  InputContainer
} from './styles';

export default class CreateGroupDialog extends Component {
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
      <PopUp disable pop={isVisible} popup={{ borderRadius: '30px', height: '50vh' }}>
        <PopUpContainer>
          <PopUpClose onClick={onDismiss}>
            <span role="img" aria-label="x">
              X
            </span>
          </PopUpClose>

          <PopContentContainer>
            <img src={idea} alt="idea" style={{ height: '15vh' }} />
            <TitlePop>Let's create a new workspace!</TitlePop>

            <InputContainer>
              <Input
                type="text"
                placeholder="🚀 Workspace name"
                onChange={this.handleInputChange}
                value={this.state.input}
              />
            </InputContainer>

            <ButtonPop onClick={() => {}}>Create workspace</ButtonPop>
          </PopContentContainer>
        </PopUpContainer>
      </PopUp>
    );
  }
}
