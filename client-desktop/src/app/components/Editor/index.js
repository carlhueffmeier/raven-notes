import React, { Component } from 'react';
import { func, string } from 'prop-types';

//========== Slate editor
import { Editor } from 'slate-react';
import { Value } from 'slate';
import Prism from 'prismjs';

import { EditorContainer, User, Quote, H1, H2, H3, H4, H5, H6, List, Code } from './styles';
import initialValue from './value.json';

//========= TESTING HIGHLIGHTING
function getContent(token) {
  if (typeof token == 'string') {
    return token
  } else if (typeof token.content == 'string') {
    return token.content
  } else {
    return token.content.map(getContent).join('')
  }
}
//===========================================

class Text extends Component {
  // Change the initialValue to empty string.
  state = {
    isPreview: false,
    value: Value.fromJSON(initialValue),
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
      case 'c':
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
          <pre>
            <Code {...attributes}>{children}</Code>
          </pre>
        )
      default:
        return null;
    }
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  // On key down, check for specific key shortcuts.
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

  // On space, if it was after an auto-markdown shortcut, convert the current node into the shortcut's
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
    if (type === 'list-item' && startBlock.type == 'list-item') return
    event.preventDefault()

    change.setBlocks(type)

    if (type === 'list-item') {
      change.wrapBlock('bulleted-list')
    }

    change.moveFocusToStartOfNode(startBlock).delete()
    return true
  }

  // On backspace if at the start of a non-paragraph, convert it back into a paragraph node.
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

  // On return, if at the end of a node type that should not be extended, create a new paragraph below it.
  onEnter = (event, change) => {
    const { value } = change
    const { selection } = value
    const { start, end, isExpanded } = selection
    if (isExpanded) return

    const { startBlock } = value
    if (start.offset === 0 && startBlock.text.length == 0)
      return this.onBackspace(event, change)
    if (end.offset !== startBlock.text.length) return

    if (
      startBlock.type !== 'heading-one' &&
      startBlock.type !== 'heading-two' &&
      startBlock.type !== 'heading-three' &&
      startBlock.type !== 'heading-four' &&
      startBlock.type !== 'heading-five' &&
      startBlock.type !== 'heading-six' &&
      startBlock.type !== 'block-quote'
    ) {
      return
    }

    event.preventDefault()
    change.splitBlock().setBlocks('paragraph')
    return true
  }

  //================================================ TESTING HIGHLIGHTING
  decorateNode = node => {
    if (node.type !== 'code') return

    const language = node.data.get('language')
    const texts = node.getTexts().toArray()
    const string = texts.map(t => t.text).join('\n')
    const grammar = Prism.languages[language]
    const tokens = Prism.tokenize(string, grammar)
    const decorations = []
    let startText = texts.shift()
    let endText = startText
    let startOffset = 0
    let endOffset = 0
    let start = 0

    for (const token of tokens) {
      startText = endText
      startOffset = endOffset

      const content = getContent(token)
      const newlines = content.split('\n').length - 1
      const length = content.length - newlines
      const end = start + length

      let available = startText.text.length - startOffset
      let remaining = length

      endOffset = startOffset + remaining

      while (available < remaining && texts.length > 0) {
        endText = texts.shift()
        remaining = length - available
        available = endText.text.length
        endOffset = remaining
      }

      if (typeof token !== 'string') {
        const dec = {
          anchor: {
            key: startText.key,
            offset: startOffset,
          },
          focus: {
            key: endText.key,
            offset: endOffset,
          },
          mark: {
            type: token.type,
          },
        }

        decorations.push(dec)
      }

      start = end
    }

    return decorations
  }
  //=====================================================================


  render() {
    return (
      <EditorContainer>
        <User><span role='img' aria-label='user'>🙆🏼‍</span></User>
        <Editor
          placeholder='Write in here...'
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
          decorateNode={this.decorateNode}

        />
      </EditorContainer>
    );
  }
}

export default Text;