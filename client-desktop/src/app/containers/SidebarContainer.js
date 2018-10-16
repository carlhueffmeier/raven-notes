import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as currentGroupActions } from '../redux/modules/currentGroup';
import { selectors as groupSelectors } from '../redux/modules/group';
import { selectors as authenticationSelectors } from '../redux/modules/authentication';

import { actions as groupActions } from '../redux/modules/group';

import Sidebar from '../components/Sidebar';
import { prop, sortBy } from '../lib/utils';

class SidebarContainer extends Component {
  render() {
    const { groups, selectGroup, user } = this.props;
    return (
      <Sidebar groups={groups} selectGroup={selectGroup} privateGroup={groups[0]} user={user} />
    );
  }
}

function mapStateToProps(state) {
  const allGroups = groupSelectors.getAllGroups(state);

  return {
    user: authenticationSelectors.getCurrentUser(state),
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
