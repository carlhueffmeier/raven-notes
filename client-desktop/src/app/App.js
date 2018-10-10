import React, { Component } from 'react';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';
import './styles';
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

  displayNotes = notes => {
    this.setState({displayNoteList: true, notes})
  }

  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <Layout columns={3}>
          <Layout.Sidebar><Sidebar display={this.displayNotes}/></Layout.Sidebar>
          <Layout.NoteList><NoteList notes={this.state.notes}/></Layout.NoteList>
          <Layout.Editor><Editor/></Layout.Editor>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
