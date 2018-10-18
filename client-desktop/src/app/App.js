import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';
import { Header, injectGlobalStyles } from './styles';
import ModalsContainer from './containers/ModalsContainer';
import LayoutContainer from './containers/LayoutContainer';
import LayoutSwitch from './components/LayoutSwitch';
import SigninPlease from './containers/SigninPlease';
import { actions as authenticationActions } from './redux/modules/authentication';
import { selectors as themeSelectors, actions as themeActions } from './redux/modules/theme';
const { ipcRenderer } = window.require('electron');

class App extends Component {
  static propTypes = {
    persistor: object.isRequired
  };

  componentDidMount() {
    const { toggleDarkMode } = this.props;
    ipcRenderer.on('toggle-dark-mode', () => {
      toggleDarkMode();
    });
  }

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
    console.log('aaaapp', currentTheme.colors.secondary);
    injectGlobalStyles({ background: currentTheme.colors.secondary });
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
  fetchCurrentUser: authenticationActions.fetchCurrentUser,
  toggleDarkMode: themeActions.toggleDarkMode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
