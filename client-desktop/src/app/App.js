import React, { Component } from 'react';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';

import './styles';

import { P1, P2, P3, Buttons } from './styles';

import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import NoteListStatefulContainer from './containers/NoteListStatefulContainer';
import EditorStatefulContainer from './containers/EditorStatefulContainer';

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

        <Buttons>
          <P1 onClick={() => this.setState({ actualColumns: 1 })}>
            01
          </P1>
          <P2 onClick={() => this.setState({ actualColumns: 2 })}>
            02
          </P2>
          <P3 onClick={() => this.setState({ actualColumns: 3 })}>
            03
          </P3>
        </Buttons>


          <Layout columns={this.state.actualColumns}>
          <Layout.Sidebar><Sidebar /></Layout.Sidebar>
          <Layout.NoteList><NoteListStatefulContainer /></Layout.NoteList>
          <Layout.Editor><EditorStatefulContainer /></Layout.Editor>
        </Layout>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
