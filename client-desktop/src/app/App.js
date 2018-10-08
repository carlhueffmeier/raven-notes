import React, { Component } from 'react';
import Editor from './components/Editor';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';
import './styles';
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
        <Editor
          content={this.state.loadedFile}
          onChange={newContent => {
            this.setState({
              loadedFile: newContent
            });
          }}
        />
      </ThemeProvider>
    );
  }
}

export default App;
