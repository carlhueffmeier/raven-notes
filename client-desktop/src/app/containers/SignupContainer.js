import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actions as authenticationActions,
  selectors as authenticationSelectors
} from '../redux/modules/authentication';
import SignupForm from '../components/SignupForm';

class SignupContainer extends Component {
  render() {
    const { signup, loading, error, ...props } = this.props;
    return <SignupForm onSubmit={signup} {...props} loading={loading} error={error} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: authenticationSelectors.getLoading(state),
    error: authenticationSelectors.getError(state)
  };
}

const mapDispatchToProps = {
  signup: authenticationActions.signup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupContainer);
