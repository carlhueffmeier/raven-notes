import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectors as authenticationSelectors,
  actions as authenticationActions
} from '../redux/modules/authentication';
import UserBadge from '../components/UserBadge';

class UserBadgeContainer extends Component {
  render() {
    const { user, signout } = this.props;
    return <UserBadge signout={signout} user={user} />;
  }
}

function mapStateToProps(state) {
  return {
    user: authenticationSelectors.getCurrentUser(state)
  };
}

const mapDispatchToProps = {
  signout: authenticationActions.signout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBadgeContainer);
