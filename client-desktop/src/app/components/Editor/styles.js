import styled from 'react-emotion';

const EditorContainer = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 8vw;
  border: 1px solid black;
`;

const Quote = styled('blockquotequote')`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  font-family: 'Space Mono', monospace;
  font-size: .8em;
`
const H1 = styled('h1')`
  color: #2F4F4F;
`
const H2 = styled('h2')`
  color: #708090;
`
const H3 = styled('h3')`
  color: #778899;
`
const H4 = styled('h4')`
  color: #696969;
`
const H5 = styled('h5')`
  color: #808080;
`
const H6 = styled('h6')`
  color: #A9A9A9;
`

const List = styled('li')`
  font-size: .8em;
`

export {
  EditorContainer,
  Quote,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  List
};
