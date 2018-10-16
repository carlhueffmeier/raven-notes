import React, { Component } from 'react';
import {
  SidebarContainer,
  H3,
  SName,
  USection,
  GSection,
  Sect,
  Img,
  GroupInitial,
  ButtonAddGroup,
  ButtonAddImg
} from './styles';

import notes from '../../../assets/paper-plane.svg';
import extracts from '../../../assets/origami.svg';
import defaultAvatar from '../../../assets/man.svg';
import add from '../../../assets/plus.svg';

import { withTheme } from 'emotion-theming';
import CreateGroupDialog from '../CreateGroupDialog';

class Sidebar extends Component {
  state = {
    input: '',
    popped: false
  };

  handlePop = () => {
    this.setState({ popped: !this.state.popped });
  };

  render() {
    const { popped } = this.state;
    const { groups, selectGroup, user, privateGroup } = this.props;
    return (
      <SidebarContainer>
        <H3>
          <Img src={defaultAvatar} />
          {user && user.name}
        </H3>

        <USection>
          <SName>PRIVATE</SName>
          <Sect onClick={() => selectGroup(privateGroup.id)}>
            <Img src={notes} />
            All Notes
          </Sect>
          <Sect onClick={() => console.log('this is to show extracts')}>
            <Img src={extracts} />
            Extracts
          </Sect>
        </USection>

        <GSection>
          <div style={{ display: 'flex' }}>
            <SName>WORKSPACE</SName>

            <ButtonAddGroup onClick={this.handlePop}>
              <ButtonAddImg alt="add" src={add} />
            </ButtonAddGroup>
          </div>

          <CreateGroupDialog isVisible={popped} onDismiss={this.handlePop} />

          {groups.map(group => (
            <Sect
              key={group.id}
              onClick={() => selectGroup(group.id)}
              color={
                this.props.currentGroupId === group.id
                  ? this.props.theme.colors.textHardSelect
                  : null
              }
            >
              <GroupInitial>
                <p>{group.name.slice(0, 1)}</p>
              </GroupInitial>
              <p>{group.name}</p>
            </Sect>
          ))}
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
