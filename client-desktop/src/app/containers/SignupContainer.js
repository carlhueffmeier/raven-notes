import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as authenticationActions } from '../redux/modules/authentication';
import SignupForm from '../components/SignupForm';

class SignupContainer extends Component {
  render() {
    const { signup, ...props } = this.props;
    return <SignupForm onSubmit={signup} {...props} />;
  }
}

const mapDispatchToProps = {
  signup: authenticationActions.signup
};

export default connect(
  null,
  mapDispatchToProps
)(SignupContainer);
