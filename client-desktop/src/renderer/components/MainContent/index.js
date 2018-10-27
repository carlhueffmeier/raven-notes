import React, { Component } from 'react';
import { AppContainer, Header } from './styles';
import SigninPlease from '../../containers/SigninPlease';
import ModalsContainer from '../../containers/ModalsContainer';
import LayoutContainer from '../../containers/LayoutContainer';
import LayoutSwitchContainer from '../../containers/LayoutSwitchContainer';

class MainContent extends Component {
  render() {
    return (
      <AppContainer>
        <SigninPlease>
          <Header />
          <ModalsContainer />
          <LayoutSwitchContainer />
          <LayoutContainer />
        </SigninPlease>
      </AppContainer>
    );
  }
}

export default MainContent;
