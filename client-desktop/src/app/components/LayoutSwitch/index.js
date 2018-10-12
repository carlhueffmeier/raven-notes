import React, { Component } from 'react';
import { ButtonContainer, LayoutSwitchButton } from './styles';
import { actions as layoutActions, constants as layoutConstants } from '../../redux/modules/layout';
import { connect } from 'react-redux';

class LayoutSwitch extends Component {
  render() {
    const { changeLayout } = this.props;
    return (
      <ButtonContainer>
        <LayoutSwitchButton onClick={() => changeLayout(layoutConstants.ONE_COLUMN_LAYOUT)}>
          01
        </LayoutSwitchButton>
        <LayoutSwitchButton onClick={() => changeLayout(layoutConstants.TWO_COLUMN_LAYOUT)}>
          02
        </LayoutSwitchButton>
        <LayoutSwitchButton onClick={() => changeLayout(layoutConstants.THREE_COLUMN_LAYOUT)}>
          03
        </LayoutSwitchButton>
      </ButtonContainer>
    );
  }
}

export default connect(
  null,
  layoutActions
)(LayoutSwitch);
