import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Markdown from 'markdown-to-jsx';
import AceEditor from 'react-ace';
// eslint-disable-next-line no-unused-vars
import brace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import { EditorContainer, RenderedMarkdownContainer, PreviewButton } from './styles';

export default class Editor extends Component {

  state = {
    isPreview: false,
  }

  static propTypes = {
    onChange: func,
    content: string
  };

  change = () => {
    this.setState({
      isPreview: !this.state.isPreview
    })
  }

  // If click on preview, render this.props.content.
  render() {
    return (
      <div>
      <PreviewButton onClick={this.change}>Click for preview</PreviewButton>

      <EditorContainer>
        {
          !this.state.isPreview &&
          <AceEditor
          mode="markdown"
          theme="github"
          onChange={this.props.onChange}
          name="markdown_editor"
          value={this.props.content}
          height="100%"
          width="100%"
          wrapEnabled={true}
          />
        }


        {
          this.state.isPreview &&
          <RenderedMarkdownContainer>
          <Markdown>{this.props.content}</Markdown>
          </RenderedMarkdownContainer>
        }

      </EditorContainer>
      </div>
    );
  }
}
