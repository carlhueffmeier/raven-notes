import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as groupActions } from '../redux/modules/group';
import { selectors as currentGroupSelectors } from '../redux/modules/currentGroup';
import AddMemberForm from '../components/AddMemberForm';

class AddMemberContainer extends Component {
  handleSubmit = formData => {
    const { addMemberByEmail, currentGroupId } = this.props;
    addMemberByEmail({ groupId: currentGroupId, email: formData.email });
  };

  render() {
    return <AddMemberForm onSubmit={this.handleSubmit} />;
  }
}

function mapStateToProps(state) {
  return {
    currentGroupId: currentGroupSelectors.getCurrentGroupId(state)
  };
}

const mapDispatchToProps = {
  addMemberByEmail: groupActions.addMember
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMemberContainer);
