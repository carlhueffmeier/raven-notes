import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';
import { actions as authenticationActions } from './redux/modules/authentication';
import { selectors as themeSelectors } from './redux/modules/theme';
import MainContent from './components/MainContent';
import ElectronEventContainer from './containers/ElectronEventContainer';
import './styles';

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
          <Fragment>
            <ElectronEventContainer />
            <MainContent />
          </Fragment>
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
