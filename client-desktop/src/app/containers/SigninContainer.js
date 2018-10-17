import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actions as authenticationActions,
  selectors as authenticationSelectors
} from '../redux/modules/authentication';
import SigninForm from '../components/SigninForm';

class SigninContainer extends Component {
  render() {
    const { signin, loading, error, ...props } = this.props;
    return <SigninForm onSubmit={signin} {...props} loading={loading} error={error} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: authenticationSelectors.getLoading(state),
    error: authenticationSelectors.getError(state)
  };
}

const mapDispatchToProps = {
  signin: authenticationActions.signin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninContainer);
