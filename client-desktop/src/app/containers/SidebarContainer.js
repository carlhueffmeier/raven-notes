import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as currentGroupActions } from '../redux/modules/currentGroup';
import { selectors as groupSelectors } from '../redux/modules/group';
import { selectors as userSelectors } from '../redux/modules/user';
import Sidebar from '../components/Sidebar';

class SidebarContainer extends Component {
  render() {
    const { groups, selectGroup, user } = this.props;
    console.log(this.props);
    return (
      <Sidebar
        groups={groups.filter(group => group.id !== user.privateGroup.id)}
        selectGroup={selectGroup}
        privateGroup={groups.find(group => group.id === user.privateGroup.id)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: groupSelectors.getAllGroups(state),
    user: userSelectors.getUserById(state, 'cjn5pv4vkjqgw0932trypskwh')
  };
}

const mapDispatchToProps = {
  selectGroup: currentGroupActions.selectGroup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
