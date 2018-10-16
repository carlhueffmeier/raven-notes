import React, { Component } from 'react';
import { object } from 'prop-types';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';
import { Header } from './styles';
import LayoutContainer from './containers/LayoutContainer';
import LayoutSwitch from './components/LayoutSwitch';
import SigninPlease from './containers/SigninPlease';

class App extends Component {
  static propTypes = {
    persistor: object.isRequired
  };

  componentDidCatch(error, info) {
    console.warn('😅 Internal error: ', error, info);
    console.warn('💣 Purging persisted data');
    this.props.persistor.purge();
  }

  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <SigninPlease>
          <Header>Raven Notes 𝜶</Header>
          <LayoutSwitch />
          <LayoutContainer />
        </SigninPlease>
      </ThemeProvider>
    );
  }
}

export default App;
