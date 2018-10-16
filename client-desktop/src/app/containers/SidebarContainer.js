import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as currentGroupActions } from '../redux/modules/currentGroup';
import { selectors as groupSelectors } from '../redux/modules/group';
import { selectors as userSelectors } from '../redux/modules/user';

import { actions as groupActions } from '../redux/modules/group';

import Sidebar from '../components/Sidebar';
import { prop, sortBy } from '../lib/utils';

class SidebarContainer extends Component {
  render() {
    const { groups, selectGroup, user, createGroup } = this.props;
    return (
      <Sidebar
        // groups={groups.filter(group => group.id !== user.privateGroup.id)}
        groups={groups}
        selectGroup={selectGroup}
        // privateGroup={groups.find(group => group.id === user.privateGroup.id)}
        // privateGroup={groups[0]}
        createGroup={() => {}}
      />
    );
  }
}

function mapStateToProps(state) {
  const allGroups = groupSelectors.getAllGroups(state);
  return {
    user: userSelectors.getUserById(state, "cjn5pv4vkjqgw0932trypskwh"),
    groups: sortBy(prop('name'), allGroups)
  };
}

const mapDispatchToProps = {
  selectGroup: currentGroupActions.selectGroup,
  createGroup: groupActions.createGroup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
