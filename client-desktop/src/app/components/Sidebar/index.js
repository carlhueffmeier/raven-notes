import React, { Component } from 'react';
import { shape, string, func } from 'prop-types';

import {
  SidebarContainer,
  SectionTitle,
  GroupSection,
  GroupSectionHeader,
  GroupListItem,
  GroupInitial,
  AddGroupButton,
  ButtonAddImg,
  ButtonSignOut
} from './styles';
import addIcon from '../../../assets/plus.svg';
import UserBadgeContainer from '../../containers/UserBadgeContainer';

class Sidebar extends Component {
  static propTypes = {
    signout: func,
    user: shape({
      name: string
    })
  };

  render() {
    const { groups, currentGroupId, selectGroup, showAddGroupDialog, signout } = this.props;
    return (
      <SidebarContainer>
        <UserBadgeContainer />

        <GroupSection>
          <GroupSectionHeader>
            <SectionTitle>Workspace</SectionTitle>
            <AddGroupButton onClick={showAddGroupDialog}>
              <ButtonAddImg alt="add" src={addIcon} />
            </AddGroupButton>
          </GroupSectionHeader>

          {groups.map(group => (
            <GroupListItem
              key={group.id}
              onClick={() => selectGroup(group.id)}
              selected={group.id === currentGroupId}
            >
              <GroupInitial>
                <p>{group.name && group.name.slice(0, 1)}</p>
              </GroupInitial>
              <span>{group.name}</span>
            </GroupListItem>
          ))}
        </GroupSection>

        <ButtonSignOut onClick={signout}>Sign Out</ButtonSignOut>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
