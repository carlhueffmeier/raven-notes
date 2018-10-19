import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as groupActions, selectors as groupSelectors } from '../redux/modules/group';
import { selectors as currentGroupSelectors } from '../redux/modules/currentGroup';
import AddMemberForm from '../components/AddMemberForm';

class AddMemberContainer extends Component {
  handleSubmit = formData => {
    const { addMemberByEmail, currentGroupId } = this.props;
    addMemberByEmail({ groupId: currentGroupId, email: formData.email });
  };

  render() {
    const { loading, error } = this.props;
    return <AddMemberForm onSubmit={this.handleSubmit} loading={loading} error={error} />;
  }
}

function mapStateToProps(state) {
  return {
    currentGroupId: currentGroupSelectors.getCurrentGroupId(state),
    loading: groupSelectors.getLoading(state),
    error: groupSelectors.getError(state)
  };
}

const mapDispatchToProps = {
  addMemberByEmail: groupActions.addMember
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMemberContainer);
