import React, { Component } from 'react';
import {
  SidebarContainer,
  SectionTitle,
  GroupSection,
  GroupSectionHeader,
  GroupListItem,
  GroupInitial,
  AddGroupButton,
  ButtonAddImg
} from './styles';
import addIcon from '../../../assets/plus.svg';
import UserBadgeContainer from '../../containers/UserBadgeContainer';

class Sidebar extends Component {
  render() {
    const { groups, currentGroupId, selectGroup, showAddGroupDialog } = this.props;
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
      </SidebarContainer>
    );
  }
}

export default Sidebar;
