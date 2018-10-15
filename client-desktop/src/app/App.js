import React, { Component } from 'react';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';
import { Header } from './styles';
import LayoutContainer from './containers/LayoutContainer';
import LayoutSwitch from './components/LayoutSwitch';
import SigninPlease from './containers/SigninPlease';

class App extends Component {
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
