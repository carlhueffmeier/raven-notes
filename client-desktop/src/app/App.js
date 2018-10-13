import React, { Component, Fragment } from 'react';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';
import './styles';
import { Value } from 'slate';

import LayoutContainer from './containers/LayoutContainer';
import LayoutSwitch from './components/LayoutSwitch';
import LogIn from './components/LogIn';

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
    if (!this.props.user) {
      return (
      <LogIn />
      )
    } else {
    return (
      <ThemeProvider theme={lightTheme}>
        <Fragment>
          <LayoutSwitch />
          <LayoutContainer />
        </Fragment>
      </ThemeProvider>
    );
  }
  }
}

export default App;
