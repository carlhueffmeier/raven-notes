import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as groupActions } from '../redux/modules/group';
import CreateGroupForm from '../components/CreateGroupForm';

class CreateGroupContainer extends Component {
  render() {
    const { createGroup } = this.props;
    return <CreateGroupForm onSubmit={createGroup} />;
  }
}

const mapDispatchToProps = {
  createGroup: groupActions.createGroup
};

export default connect(
  null,
  mapDispatchToProps
)(CreateGroupContainer);
