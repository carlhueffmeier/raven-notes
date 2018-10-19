import React, { Component } from 'react';
import { bool } from 'prop-types';
import PopUp from 'react-base-popup';
import { PopUpContainer, PopContentContainer, PopUpClose } from './styles';
import { withTheme } from 'emotion-theming';

class ModalDialog extends Component {
  static propTypes = {
    isVisible: bool
  };

  render() {
    const { isVisible, onDismiss, children, theme } = this.props;
    return (
      <PopUp
        disable
        pop={isVisible}
        popup={{
          borderRadius: '30px',
          minHeight: '380px',
          height: '380',
          backgroundColor: theme.colors.secondary
        }}
      >
        <PopUpContainer>
          <PopUpClose onClick={onDismiss}>
            <span role="img" aria-label="close">
              X
            </span>
          </PopUpClose>
          <PopContentContainer>{children}</PopContentContainer>
        </PopUpContainer>
      </PopUp>
    );
  }
}

export default withTheme(ModalDialog);
