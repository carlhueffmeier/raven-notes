import React, { Component } from 'react';
import { object, func, bool } from 'prop-types';
import { Editor as SlateEditor } from 'slate-react';
import { EditorContainer, Quote, H1, H2, H3, H4, H5, H6, List } from './styles';
import './prism.css';

class Editor extends Component {
  static propTypes = {
    content: object,
    onChange: func,
    readOnly: bool
  };

  // Get the block type for a series of auto-markdown shortcut `chars`.
  getType = chars => {
    switch (chars) {
      case '**':
        return 'bold';
      case '_':
        return 'italic';
      case '—':
        return 'underline';
      case ';':
        return 'strike';
      case '*':
      case '-':
      case '+':
        return 'list-item';
      case '>':
        return 'block-quote';
      case '#':
        return 'heading-one';
      case '##':
        return 'heading-two';
      case '###':
        return 'heading-three';
      case '####':
        return 'heading-four';
      case '#####':
        return 'heading-five';
      case '######':
        return 'heading-six';
      case '<':
        return 'code-block';
      default:
        return null;
    }
  };

  // Render slate node.
  renderNode = props => {
    const { attributes, children, node } = props;
    switch (node.type) {
      case 'block-quote':
        return (
          <Quote {...attributes}>
            <span role="img" aria-label="robot">
              🤖
            </span>
            {children}
          </Quote>
        );
      case 'bold':
        return (
          <b {...attributes}>
            {children}
            {'\n'}
          </b>
        );
      case 'italic':
        return (
          <i {...attributes}>
            {children}
            {'\n'}
          </i>
        );
      case 'underline':
        return (
          <u {...attributes}>
            {children}
            {'\n'}
          </u>
        );
      case 'strike':
        return (
          <s {...attributes}>
            {children}
            {'\n'}
          </s>
        );
      case 'heading-one':
        return <H1 {...attributes}>{children}</H1>;
      case 'heading-two':
        return <H2 {...attributes}>{children}</H2>;
      case 'heading-three':
        return <H3 {...attributes}>{children}</H3>;
      case 'heading-four':
        return <H4 {...attributes}>{children}</H4>;
      case 'heading-five':
        return <H5 {...attributes}>{children}</H5>;
      case 'heading-six':
        return <H6 {...attributes}>{children}</H6>;
      case 'list-item':
        return <List {...attributes}>{children}</List>;
      case 'code-block':
        return (
          <pre className="language-javascript">
            <code className="language-javascript" {...attributes}>
              {children}
            </code>
          </pre>
        );
      default:
        return null;
    }
  };

  // On key down, check for specific key shortcuts (next three functions).
  onKeyDown = (event, change) => {
    switch (event.key) {
      case ' ':
        return this.onSpace(event, change);
      case 'Backspace':
        return this.onBackspace(event, change);
      case 'Enter':
        return this.onEnter(event, change);
      default:
        return null;
    }
  };

  // ========== HELPER FUNCTIONS (?) ========== //
  // If it was after an auto-markdown shortcut, convert the current node into the shortcut's
  // corresponding type.
  onSpace = (event, change) => {
    const { value } = change;
    const { selection, startBlock } = value;
    const { start } = selection;

    if (selection.isExpanded) return;
    const chars = startBlock.text.slice(0, start.offset);
    const type = this.getType(chars, change);

    if (!type) return;
    if (type === 'list-item' && startBlock.type === 'list-item') return;
    change.setBlocks(type);
    if (type === 'list-item') {
      change.wrapBlock('bulleted-list');
    }
    change.moveFocusToStartOfNode(startBlock).delete();
    event.preventDefault();
    return true;
  };

  // If at the start of a non-paragraph, convert it back into a paragraph node.
  onBackspace = (event, change) => {
    event.preventDefault();
    const { value } = change;
    const { selection, startBlock } = value;
    if (selection.isExpanded) return;
    if (selection.start.offset !== 0) return;
    if (startBlock.type === 'paragraph') return;
    if (startBlock.type === 'list-item') {
      change.unwrapBlock('bulleted-list');
    }
    change.setBlocks('paragraph');
    return true;
  };

  // If at the end of a node type that should not be extended, create a new paragraph below it.
  onEnter = (event, change) => {
    event.preventDefault();
    const { value } = change;
    const { selection, startBlock } = value;
    const { start, end, isExpanded } = selection;
    if (isExpanded) return;
    if (start.offset === 0 && startBlock.text.length === 0) return this.onBackspace(event, change);
    if (end.offset !== startBlock.text.length) return;
    if (
      startBlock.type !== 'heading-one' &&
      startBlock.type !== 'heading-two' &&
      startBlock.type !== 'heading-three' &&
      startBlock.type !== 'heading-four' &&
      startBlock.type !== 'heading-five' &&
      startBlock.type !== 'heading-six' &&
      startBlock.type !== 'block-quote' &&
      startBlock.type !== 'code-block' &&
      startBlock.type !== 'bold' &&
      startBlock.type !== 'italic' &&
      startBlock.type !== 'underline' &&
      startBlock.type !== 'strike'
    ) {
      return;
    }
    change.splitBlock().setBlocks('paragraph');
    return true;
  };

  render() {
    const { content, onChange, readOnly } = this.props;
    return (
      <EditorContainer>
        <SlateEditor
          readOnly={readOnly}
          placeholder="Let's write some notes! 💃🏼"
          value={content}
          onChange={change => {
            onChange(change.value);
          }}
          schema={this.schema}
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
          style={{
            width: '100%',
            height: '100%',
            padding: '2vh',
            overflow: 'auto'
          }}
        />
      </EditorContainer>
    );
  }
}

export default Editor;
