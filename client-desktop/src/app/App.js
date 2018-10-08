import React, { Component } from 'react';
import Editor from './components/Editor';
import NoteList from './components/NoteList';
import { lightTheme } from './themes';
import { ThemeProvider } from 'emotion-theming';
import './styles';
import styled from 'react-emotion';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const { ipcRenderer } = window.require('electron');

const Layout = styled('div')`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const NOTES_QUERY = gql`
query {
  notes {
    id
    title
    body
    createdAt
    author {
      firstName
      lastName
      userName
    }
  }
}
`;

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
      <div>
        <ThemeProvider theme={lightTheme}>
          <Layout>
            {/* <Query query={NOTES_QUERY}>
              {({data, loading, error}) => {
                if (loading) return "Loading..";
                if (error) return error;
                return <NoteList notes={data.notes} />
              }}
            </Query> */}
            <Editor
              content={this.state.loadedFile}
              onChange={newContent => {
                this.setState({
                  loadedFile: newContent
                });
              }}
            />
          </Layout>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
