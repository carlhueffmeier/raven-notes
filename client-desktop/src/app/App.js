import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';
import { Header } from './styles';
import ModalsContainer from './containers/ModalsContainer';
import LayoutContainer from './containers/LayoutContainer';
import LayoutSwitch from './components/LayoutSwitch';
import SigninPlease from './containers/SigninPlease';
import { actions as authenticationActions } from './redux/modules/authentication';
import { selectors as themeSelectors } from './redux/modules/theme';

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
    // ⚠️ Possible race condition
    this.props.resetAuthHeaders();
    this.props.fetchCurrentUser();
  };

  render() {
    const { persistor, currentTheme } = this.props;
    return (
      <PersistGate loading={null} persistor={persistor} onBeforeLift={this.onBeforeLift}>
        <ThemeProvider theme={currentTheme}>
          <SigninPlease>
            <Header />
            <ModalsContainer />
            <LayoutSwitch />
            <LayoutContainer />
          </SigninPlease>
        </ThemeProvider>
      </PersistGate>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTheme: themeSelectors.getCurrentTheme(state)
  };
}

const mapDispatchToProps = {
  resetAuthHeaders: authenticationActions.resetAuthHeaders,
  fetchCurrentUser: authenticationActions.fetchCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
