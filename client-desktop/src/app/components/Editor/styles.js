import styled from 'react-emotion';

const EditorContainer = styled('div')`
  display: flex;
  width: 50vw;
  height: 100vh;
  flex-direction: column;
`;

const RenderedMarkdownContainer = styled('div')`
  flex-direction: column;
  height: 100%;
  width: 50%;
  overflow: auto;
`;

export { EditorContainer, RenderedMarkdownContainer };
