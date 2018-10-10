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
    actualColumns: 3
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
        <React.Fragment>
        
          <button
            style={{
              position: "absolute",
              top: 0,
              left: "90vw",
              height: "50px"
            }}
            onClick={() => this.setState({ actualColumns: 1 })}>
            columns 1
          </button>
          <button
            style={{
              position: "absolute",
              top: 50,
              left: "90vw",
              height: "50px"
            }}
            onClick={() => this.setState({ actualColumns: 2 })}>
            columns 2
          </button>
          <button
            style={{
              position: "absolute",
              top: 100,
              left: "90vw",
              height: "50px"
            }}
            onClick={() => this.setState({ actualColumns: 3 })}>
            columns 3
          </button>
          <Layout columns={this.state.actualColumns}>
          <Layout.Sidebar><Sidebar/></Layout.Sidebar>
          <Layout.NoteList><NoteList/></Layout.NoteList>
          <Layout.Editor><Editor/></Layout.Editor>
        </Layout>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
