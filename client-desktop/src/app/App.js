import React, { Component } from 'react';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';

import './styles';

import { P1, P2, P3 } from './styles';

import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import Editor from './components/Editor';

const { ipcRenderer } = window.require('electron');

class App extends Component {
  state = {
    loadedFile: '',
  };

  constructor() {
    super();
    this.state = {
      groups: [],
      displayNoteList: false,
      notes: []
    }
    // When a new file is opened, load the file content
    ipcRenderer.on('new-file', (event, fileContent) => {
      this.setState({
        loadedFile: fileContent,
      });
    });
  }

  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <React.Fragment>

          <P1
            onClick={() => this.setState({ actualColumns: 1 })}>
            Editor
          </P1>
          <P2
            style={{
              position: "absolute",
              top: 50,
              left: "90vw",
              height: "50px"
            }}
            onClick={() => this.setState({ actualColumns: 2 })}>
            Notes && Menu
          </P2>
          <P3
            style={{
              position: "absolute",
              top: 100,
              left: "90vw",
              height: "50px"
            }}
            onClick={() => this.setState({ actualColumns: 3 })}>
            All
          </P3>
          <Layout columns={this.state.actualColumns}>
          <Layout.Sidebar><Sidebar /></Layout.Sidebar>
          <Layout.NoteList><NoteList /></Layout.NoteList>
          <Layout.Editor><Editor /></Layout.Editor>
        </Layout>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
