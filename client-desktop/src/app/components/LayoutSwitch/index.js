import React, { Component } from 'react';
import { ButtonContainer, LayoutSwitchButton, Img } from './styles';
import { actions as layoutActions, constants as layoutConstants } from '../../redux/modules/layout';
import { connect } from 'react-redux';

import OneColumnLayout from '../../../assets/menu-1.svg';
import TwoColumnLayout from '../../../assets/menu-2.svg';
import ThreeColumnLayout from '../../../assets/menu-3.svg'


class LayoutSwitch extends Component {
  render() {
    const { changeLayout } = this.props;
    return (
      <ButtonContainer>
        <LayoutSwitchButton onClick={() => changeLayout(layoutConstants.ONE_COLUMN_LAYOUT)}>
          <Img alt='OneColumnLayout' src={OneColumnLayout} />
        </LayoutSwitchButton>
        <LayoutSwitchButton onClick={() => changeLayout(layoutConstants.TWO_COLUMN_LAYOUT)}>
          <Img alt='TwoColumnLayout' src={TwoColumnLayout} />
        </LayoutSwitchButton>
        <LayoutSwitchButton onClick={() => changeLayout(layoutConstants.THREE_COLUMN_LAYOUT)}>
          <Img alt='ThreeColumnLayout' src={ThreeColumnLayout} />
        </LayoutSwitchButton>
      </ButtonContainer>
    );
  }
}

export default connect(
  null,
  layoutActions
)(LayoutSwitch);
