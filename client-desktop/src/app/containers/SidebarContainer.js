import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as groupSelectors } from '../redux/modules/group';
import { actions as currentGroupActions } from '../redux/modules/currentGroup';
import Sidebar from '../components/Sidebar';
import { prop, sortBy } from '../lib/utils';

class SidebarContainer extends Component {
  render() {
    const { groups, selectGroup } = this.props;
    return <Sidebar groups={groups} selectGroup={selectGroup} />;
  }
}

function mapStateToProps(state) {
  const allGroups = groupSelectors.getAllGroups(state);
  return {
    groups: sortBy(prop('name'), allGroups)
  };
}

const mapDispatchToProps = {
  selectGroup: currentGroupActions.selectGroup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
