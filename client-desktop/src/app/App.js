import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { lightTheme } from './themes';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';
import { Header } from './styles';
import LayoutContainer from './containers/LayoutContainer';
import LayoutSwitch from './components/LayoutSwitch';
import SigninPlease from './containers/SigninPlease';
import { actions as authenticationActions } from './redux/modules/authentication';

class App extends Component {
  static propTypes = {
    persistor: object.isRequired
  };

  componentDidCatch(error, info) {
    console.warn('😅 Internal error: ', error, info);
    console.warn('💣 Purging persisted data');
    this.props.persistor.purge();
  }

  onBeforeLift = () => {
    this.props.resetAuthHeaders();
    this.props.fetchCurrentUser();
  };

  render() {
    const { persistor, resetAuthHeaders } = this.props;
    return (
      <PersistGate loading={null} persistor={persistor} onBeforeLift={this.onBeforeLift}>
        <ThemeProvider theme={lightTheme}>
          <SigninPlease>
            <Header>Raven Notes 𝜶</Header>
            <LayoutSwitch />
            <LayoutContainer />
          </SigninPlease>
        </ThemeProvider>
      </PersistGate>
    );
  }
}

const mapDispatchToProps = {
  resetAuthHeaders: authenticationActions.resetAuthHeaders,
  fetchCurrentUser: authenticationActions.fetchCurrentUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
