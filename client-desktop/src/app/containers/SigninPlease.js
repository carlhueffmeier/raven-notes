import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SigninPage from '../components/SigninPage';
import { selectors as authenticationSelectors } from '../redux/modules/authentication';

class SigninPlease extends Component {
  render() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return <SigninPage />;
    }
    return <Fragment>{this.props.children}</Fragment>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: authenticationSelectors.getIsAuthenticated(state)
  };
}

export default connect(mapStateToProps)(SigninPlease);
