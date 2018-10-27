import React, { Component } from 'react';
import { ButtonContainer, LayoutSwitchButton } from './styles';
import { actions as layoutActions, constants as layoutConstants } from '../../redux/modules/layout';
import { connect } from 'react-redux';

import { LayoutIconThreeColumns, LayoutIconNoteList, LayoutIconFocus } from '../Icons';

const layouts = [
  {
    title: 'Three Column Layout',
    id: layoutConstants.THREE_COLUMN_LAYOUT,
    icon: LayoutIconThreeColumns
  },
  {
    title: 'Group View',
    id: layoutConstants.TWO_COLUMN_LAYOUT,
    icon: LayoutIconNoteList
  },
  {
    title: 'Focus View',
    id: layoutConstants.ONE_COLUMN_LAYOUT,
    icon: LayoutIconFocus
  }
];

class LayoutSwitch extends Component {
  render() {
    const { changeLayout, currentLayout } = this.props;
    return (
      <ButtonContainer>
        {layouts.map(layout => (
          <LayoutSwitchButton key={layout.id} onClick={() => changeLayout(layout.id)}>
            <layout.icon active={layout.id === currentLayout} />
          </LayoutSwitchButton>
        ))}
      </ButtonContainer>
    );
  }
}

export default connect(
  null,
  layoutActions
)(LayoutSwitch);
