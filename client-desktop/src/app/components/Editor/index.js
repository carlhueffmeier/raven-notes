import React, { Component } from 'react';
// import Prism from 'prismjs';
import './prism.css';
import { func, string } from 'prop-types';

//========== Slate editor
import { Editor as SlateEditor } from 'slate-react';
import { Value } from 'slate';

import { EditorContainer, Quote, H1, H2, H3, H4, H5, H6, List } from './styles';
import initialValue from './value.json';

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: Value.fromJSON(initialValue),
    }
  }

  static propTypes = {
    onChange: func,
    content: string
  };

// Get the block type for a series of auto-markdown shortcut `chars`.
  getType = chars => {
    switch (chars) {
      case '*':
      case '-':
      case '+':
        return 'list-item'
      case '>':
        return 'block-quote'
      case '#':
        return 'heading-one'
      case '##':
        return 'heading-two'
      case '###':
        return 'heading-three'
      case '####':
        return 'heading-four'
      case '#####':
        return 'heading-five'
      case '######':
        return 'heading-six'
      case '<':
        return 'code-block'
      default:
        return null
    }
  }

// Render slate node.
  renderNode = props => {
    const { attributes, children, node } = props
    switch (node.type) {
      case 'block-quote':
        return <Quote {...attributes}><span role='img' aria-label='robot' >🤖</span> {children}</Quote>
      case 'bulleted-list':
        return <List {...attributes}>{children}</List>
      case 'heading-one':
        return <H1 {...attributes}>{children}</H1>
      case 'heading-two':
        return <H2 {...attributes}>{children}</H2>
      case 'heading-three':
        return <H3 {...attributes}>{children}</H3>
      case 'heading-four':
        return <H4 {...attributes}>{children}</H4>
      case 'heading-five':
        return <H5 {...attributes}>{children}</H5>
      case 'heading-six':
        return <H6 {...attributes}>{children}</H6>
      case 'list-item':
        return <List {...attributes}>{children}</List>
      case 'code-block':
        return (
          <pre className='language-javascript'>
            <code className='language-javascript' {...attributes}>
              {children}
            </code>
          </pre>
        )
      default:
        return null;
    }
  }

  onChange = ({value}) => {
    this.setState({ value })
  }

// On key down, check for specific key shortcuts (next three functions).
  onKeyDown = (event, change) => {
    switch (event.key) {
      case ' ':
        return this.onSpace(event, change)
      case 'Backspace':
        return this.onBackspace(event, change)
      case 'Enter':
        return this.onEnter(event, change)
      default:
        return null;
    }
  }

// ========== HELPER FUNCTIONS (?) ========== //
// If it was after an auto-markdown shortcut, convert the current node into the shortcut's
// corresponding type.
  onSpace = (event, change) => {
    const { value } = change
    const { selection } = value
    if (selection.isExpanded) return

    const { startBlock } = value
    const { start } = selection
    const chars = startBlock.text.slice(0, start.offset).replace(/\s*/g, '')
    const type = this.getType(chars)

    if (!type) return
    if (type === 'list-item' && startBlock.type === 'list-item') return
    event.preventDefault()

    change.setBlocks(type)

    if (type === 'list-item') {
      change.wrapBlock('bulleted-list')
    }

    change.moveFocusToStartOfNode(startBlock).delete()
    // Prism.highlightAll();
    return true
  }

// If at the start of a non-paragraph, convert it back into a paragraph node.
  onBackspace = (event, change) => {
    const { value } = change
    const { selection } = value
    if (selection.isExpanded) return
    if (selection.start.offset !== 0) return

    const { startBlock } = value
    if (startBlock.type === 'paragraph') return

    event.preventDefault()
    change.setBlocks('paragraph')

    if (startBlock.type === 'list-item') {
      change.unwrapBlock('bulleted-list')
    }

    return true
  }

// If at the end of a node type that should not be extended, create a new paragraph below it.
  onEnter = (event, change) => {
    const { value } = change
    const { selection } = value
    const { start, end, isExpanded } = selection
    if (isExpanded) return

    const { startBlock } = value
    if (start.offset === 0 && startBlock.text.length === 0)
      return this.onBackspace(event, change)
    if (end.offset !== startBlock.text.length) return

    if (
      startBlock.type !== 'heading-one' &&
      startBlock.type !== 'heading-two' &&
      startBlock.type !== 'heading-three' &&
      startBlock.type !== 'heading-four' &&
      startBlock.type !== 'heading-five' &&
      startBlock.type !== 'heading-six' &&
      startBlock.type !== 'block-quote' &&
      startBlock.type !== 'code-block'
    ) {
      return
    }

    event.preventDefault()
    change.splitBlock().setBlocks('paragraph')
    return true
  }

  render() {
    return (
      <EditorContainer>
        <SlateEditor
          placeholder='Write here 👓'
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
          style={{
            backgroundColor: 'lavender',
            width: '100%',
            height: '100%',
            cursor: 'text'
          }}
        />
      </EditorContainer>
    );
  }
}

export default Editor;
