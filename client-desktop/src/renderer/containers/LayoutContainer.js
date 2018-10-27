import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as layoutSelectors } from '../redux/modules/layout';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import NoteListContainer from '../containers/NoteListContainer';
import EditorContainer from '../containers/EditorContainer';

class LayoutContainer extends Component {
  render() {
    const { currentLayout } = this.props;
    return (
      <Layout layout={currentLayout}>
        <Layout.Sidebar>
          <Sidebar />
        </Layout.Sidebar>
        <Layout.NoteList>
          <NoteListContainer />
        </Layout.NoteList>
        <Layout.Editor>
          <EditorContainer />
        </Layout.Editor>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLayout: layoutSelectors.getCurrentLayout(state)
  };
}

export default connect(mapStateToProps)(LayoutContainer);
