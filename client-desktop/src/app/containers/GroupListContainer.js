import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as currentGroupActions } from '../redux/modules/currentGroup';
import { selectors as groupSelectors } from '../redux/modules/group';
import { selectors as currentGroupSelectors } from '../redux/modules/currentGroup';
import { actions as groupActions } from '../redux/modules/group';
import { actions as currentNoteActions } from '../redux/modules/currentNote';
import { actions as modalsActions } from '../redux/modules/modals';
import GroupList from '../components/GroupList';
import { prop, sortBy } from '../lib/utils';

class GroupListContainer extends Component {
  handleGroupChange = newGroupId => {
    const { currentGroupId, resetCurrentNote, selectGroup } = this.props;
    if (newGroupId !== currentGroupId) {
      resetCurrentNote();
      selectGroup(newGroupId);
    }
  };

  showAddGroupDialog = () => {
    const { toggleAddGroupModal } = this.props;
    toggleAddGroupModal(true);
  };

  render() {
    const { groups, selectGroup, currentGroupId } = this.props;
    return (
      <GroupList
        groups={groups}
        currentGroupId={currentGroupId}
        selectGroup={selectGroup}
        showAddGroupDialog={this.showAddGroupDialog}
      />
    );
  }
}

function mapStateToProps(state) {
  const allGroups = groupSelectors.getAllGroups(state);
  return {
    groups: sortBy(prop('name'), allGroups),
    currentGroupId: currentGroupSelectors.getCurrentGroupId(state)
  };
}

const mapDispatchToProps = {
  selectGroup: currentGroupActions.selectGroup,
  createGroup: groupActions.createGroup,
  resetCurrentNote: currentNoteActions.resetCurrentNote,
  toggleAddGroupModal: modalsActions.toggleAddGroupModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupListContainer);
