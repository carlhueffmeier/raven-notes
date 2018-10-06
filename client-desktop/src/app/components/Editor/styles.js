import styled from 'react-emotion';

const EditorContainer = styled('div')`
  display: flex;
  height: 100vh;
`;

const RenderedMarkdownContainer = styled('div')`
  height: 100%;
  width: 50%;
  overflow: auto;
`;

export { EditorContainer, RenderedMarkdownContainer };
