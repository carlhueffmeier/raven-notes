import React, { Component } from 'react';
import { array, string, func } from 'prop-types';
import { PlusIcon } from '../Icons';
import {
  SectionTitle,
  GroupSection,
  GroupSectionHeader,
  GroupListItem,
  AddGroupButton
} from './styles';

class GroupList extends Component {
  static propTypes = {
    groups: array.isRequired,
    currentGroupId: string,
    selectGroup: func.isRequired,
    showAddGroupDialog: func.isRequired
  };

  render() {
    const { groups, currentGroupId, selectGroup, showAddGroupDialog } = this.props;
    return (
      <GroupSection>
        <GroupSectionHeader>
          <SectionTitle>Workspace</SectionTitle>
          <AddGroupButton onClick={showAddGroupDialog}>
            <PlusIcon />
          </AddGroupButton>
        </GroupSectionHeader>
        {groups.map(group => (
          <GroupListItem
            key={group.id}
            onClick={() => selectGroup(group.id)}
            selected={group.id === currentGroupId}
          >
            <span>{group.name}</span>
          </GroupListItem>
        ))}
      </GroupSection>
    );
  }
}

export default GroupList;
