import styled from 'react-emotion';

const EditorContainer = styled('div')`
  display: flex;
  width: 80VW;
  height: 100vh;
  flex-direction: column;
  padding: 8vw;
  background-color: lavender;
`;

const TextEditor = styled('div')`
  background-color: lavender;
`

const RenderedMarkdownContainer = styled('div')`
  flex-direction: column;
  height: 100%;
  width: 50%;
  overflow: auto;
`;

const PreviewButton = styled('button')`
  margin: 10px;
  padding: 10px;
  width: 10vw;
  background-color: lavender;
`

export {
  EditorContainer,
  TextEditor,
  RenderedMarkdownContainer,
  PreviewButton
};
