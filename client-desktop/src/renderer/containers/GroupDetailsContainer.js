import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as groupSelectors } from '../redux/modules/group';
import { selectors as currentGroupSelectors } from '../redux/modules/currentGroup';
import { actions as modalsActions } from '../redux/modules/modals';
import GroupDetails from '../components/GroupDetails';

class GroupDetailsContainer extends Component {
  showAddMemberDialog = () => {
    const { toggleAddMemberModal } = this.props;
    toggleAddMemberModal(true);
  };

  render() {
    const { currentGroup } = this.props;
    return (
      <GroupDetails showAddMemberDialog={this.showAddMemberDialog} currentGroup={currentGroup} />
    );
  }
}

function mapStateToProps(state) {
  const allGroups = groupSelectors.getAllGroups(state);
  let currentGroupId = currentGroupSelectors.getCurrentGroupId(state);
  if (!currentGroupId && allGroups.length > 0) {
    currentGroupId = allGroups[0].id;
  }
  return {
    currentGroup: groupSelectors.getGroupById(state, currentGroupId)
  };
}

const mapDispatchToProps = {
  toggleAddMemberModal: modalsActions.toggleAddMemberModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetailsContainer);
