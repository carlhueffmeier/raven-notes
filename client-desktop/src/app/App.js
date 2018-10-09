import React, { Component } from 'react';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';
import './styles';
import Layout from './components/Layout';
import Text from './components/Editor';
const { ipcRenderer } = window.require('electron');

class App extends Component {
  state = {
    loadedFile: ''
  };

  constructor() {
    super();
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
        <Layout columns={3}>
          <Layout.Sidebar>Sidebar</Layout.Sidebar>
          <Layout.NoteList>NoteList</Layout.NoteList>
          <Layout.Editor><Text /></Layout.Editor>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
