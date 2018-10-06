import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Markdown from 'markdown-to-jsx';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import { EditorContainer, RenderedMarkdownContainer } from './styles';

export default class Editor extends Component {
  static propTypes = {
    onChange: func,
    content: string
  };

  render() {
    return (
      <EditorContainer>
        <AceEditor
          mode="markdown"
          theme="github"
          onChange={this.props.onChange}
          name="markdown_editor"
          value={this.props.content}
          height="100%"
          width="50%"
          wrapEnabled={true}
        />
        <RenderedMarkdownContainer>
          <Markdown>{this.props.content}</Markdown>
        </RenderedMarkdownContainer>
      </EditorContainer>
    );
  }
}
