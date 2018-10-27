import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CreateGroupDialog from '../components/CreateGroupDialog';
import AddMemberDialog from '../components/AddMemberDialog';
import { selectors as modalsSelectors, actions as modalsActions } from '../redux/modules/modals';

class ModalsContainer extends Component {
  render() {
    const {
      addGroupModalVisible,
      addMemberModalVisible,
      // groupSettingsModalVisible,
      toggleAddGroupModal,
      toggleAddMemberModal
      // toggleGroupSettingsModal
    } = this.props;

    return (
      <Fragment>
        <CreateGroupDialog
          isVisible={addGroupModalVisible}
          onDismiss={() => toggleAddGroupModal(false)}
        />
        <AddMemberDialog
          isVisible={addMemberModalVisible}
          onDismiss={() => toggleAddMemberModal(false)}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    addGroupModalVisible: modalsSelectors.getAddGroupModalVisible(state),
    addMemberModalVisible: modalsSelectors.getAddMemberModalVisible(state)
    // groupSettingsModalVisible: modalsSelectors.getGroupSettingsModalVisible(state)
  };
}

export default connect(
  mapStateToProps,
  modalsActions
)(ModalsContainer);
