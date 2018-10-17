import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as currentGroupActions } from '../redux/modules/currentGroup';
import { selectors as groupSelectors } from '../redux/modules/group';
import { selectors as currentGroupSelectors } from '../redux/modules/currentGroup';
import {
  selectors as authenticationSelectors,
  actions as authenticatioActions
} from '../redux/modules/authentication';
import { actions as groupActions } from '../redux/modules/group';
import { actions as currentNoteActions } from '../redux/modules/currentNote';
import { actions as modalsActions } from '../redux/modules/modals';
import Sidebar from '../components/Sidebar';
import { prop, sortBy } from '../lib/utils';

class SidebarContainer extends Component {
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
    const { groups, selectGroup, currentGroupId, user, signout } = this.props;
    return (
      <Sidebar
        groups={groups}
        currentGroupId={currentGroupId}
        selectGroup={selectGroup}
        user={user}
        showAddGroupDialog={this.showAddGroupDialog}
        signout={signout}
      />
    );
  }
}

function mapStateToProps(state) {
  const allGroups = groupSelectors.getAllGroups(state);
  return {
    user: authenticationSelectors.getCurrentUser(state),
    groups: sortBy(prop('name'), allGroups),
    currentGroupId: currentGroupSelectors.getCurrentGroupId(state)
  };
}

const mapDispatchToProps = {
  selectGroup: currentGroupActions.selectGroup,
  createGroup: groupActions.createGroup,
  resetCurrentNote: currentNoteActions.resetCurrentNote,
  toggleAddGroupModal: modalsActions.toggleAddGroupModal,
  signout: authenticatioActions.signout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
