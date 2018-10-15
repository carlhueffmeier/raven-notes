import React, { Component, Fragment } from 'react';
import SigninContainer from '../containers/SigninContainer';

class SigninPlease extends Component {
  render() {
    // TODO: Get status from redux store
    const isAuthenticated = true;
    if (!isAuthenticated) {
      return <SigninContainer />;
    }
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default SigninPlease;
