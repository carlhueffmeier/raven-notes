import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as authenticationActions } from '../redux/modules/authentication';
import SigninForm from '../components/SigninForm';

class SigninContainer extends Component {
  render() {
    const { signin, ...props } = this.props;
    return <SigninForm onSubmit={signin} {...props} />;
  }
}

const mapDispatchToProps = {
  signin: authenticationActions.signin
};

export default connect(
  null,
  mapDispatchToProps
)(SigninContainer);
