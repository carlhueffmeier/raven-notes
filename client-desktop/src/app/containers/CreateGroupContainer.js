import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as groupActions, selectors as groupSelectors } from '../redux/modules/group';
import CreateGroupForm from '../components/CreateGroupForm';

class CreateGroupContainer extends Component {
  render() {
    const { createGroup, loading, error } = this.props;
    return <CreateGroupForm onSubmit={createGroup} loading={loading} error={error} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: groupSelectors.getLoading(state),
    error: groupSelectors.getError(state)
  };
}

const mapDispatchToProps = {
  createGroup: groupActions.createGroup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroupContainer);
