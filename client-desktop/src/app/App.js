import React, { Component, Fragment } from 'react';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';
import './styles';
import { Header } from './styles';

import LayoutContainer from './containers/LayoutContainer';
import LayoutSwitch from './components/LayoutSwitch';

const { ipcRenderer } = window.require('electron');

class App extends Component {
  state = {
    loadedFile: ''
  };

  constructor() {
    super();
    this.state = {
      groups: [],
      displayNoteList: false,
      notes: []
    };
    // When a new file is opened, load the file content
    ipcRenderer.on('new-file', (event, fileContent) => {
      this.setState({
        loadedFile: fileContent
      });
    });
  }

  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <Fragment>
          <Header>Raven Notes 1.0</Header>
          <LayoutSwitch />
          <LayoutContainer />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
