import styled from 'react-emotion';

const EditorContainer = styled('div')`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
  padding-left: 1.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.plight};
  & ::-webkit-scrollbar {
    display: block;
    background: transparent;
    width: 0.5rem;
  }
  & ::-webkit-scrollbar-thumb {
    display: block;
    background: ${props => props.theme.colors.pdark};
    border-radius: 0.5rem;
    &:active {
      background: ${props => props.theme.colors.primary};
    }
  }
`;

const User = styled('div')`
  flex-direction: column;
`;

const Quote = styled('blockquote')`
  background: #f9f9f9;
  border-left: 10px solid ${props => props.theme.colors.quoteBorder};
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  font-family: 'Space Mono', monospace;
  font-size: 0.8em;
  color: ${props => props.theme.colors.quote};
`;

const H1 = styled('h1')`
  color: ${props => props.theme.colors.h1};
`;

const H2 = styled('h2')`
  color: ${props => props.theme.colors.h2};
`;

const H3 = styled('h3')`
  color: ${props => props.theme.colors.h3};
`;

const H4 = styled('h4')`
  color: ${props => props.theme.colors.h4};
`;

const H5 = styled('h5')`
  color: ${props => props.theme.colors.h5};
`;

const H6 = styled('h6')`
  color: ${props => props.theme.colors.h6};
`;

const List = styled('li')`
  font-size: 0.8em;
`;

const Code = styled('code')`
  padding: 5px;
`;

const Raven = styled('div')`
  font-family: 'Space Mono', monospace;
`;

export { EditorContainer, User, Quote, H1, H2, H3, H4, H5, H6, List, Code, Raven };
