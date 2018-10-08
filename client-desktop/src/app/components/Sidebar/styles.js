import styled from "react-emotion";

/*
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
samples data */

const SidebarContainer = styled("div")`
  width: 200px;
  height: auto;
  overflow: auto;
  display: flex;
  flex-flow: column wrap;
  border-right: 1px solid black;
  align-items: center;
  background: linear-gradient(to right bottom, #2bff00, #99ffbb);
  padding-left: 15px;
  padding-right: 15px;
  & RavenSection {
    align-items: flex-start;
  }
`;

const RowStuff = styled("div")`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Logo = styled("img")`
  height: 35px;
  width: 35px;
  margin-right: 10px;
`;

const AppTitle = styled("h2")`
  margin: 0;
  line-height: 35px;
`;

const SearchBox = styled("input")`
  border-radius: 20px;
  transition: 1s;
  margin: 0 5px;
  padding: 5px;
  text-indent: 8px;
  cursor: text;
  :hover,
  :focus {
    background-color: black;
    color: #2bff00;
  }
  :focus {
    outline: 0;
  }
`;

const Button = styled("button")`
  border-radius: 20px;
  height: auto;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const SectionTitle = styled("h3")`
  font-weight: bold;
  > :empty {
    margin: 5vh 0;
  }
`;

const RavenSection = styled("section")`
  text-indent: 5px;
  width: 100%;
  align-items: flex-start;
`;

const SectionBullet = styled("li")`
  list-style-type: none;
`;

/* const SearchBoxB = props => {
  return (
    <input css={
      `
      color: blue;
      font-size: ${props.fontSize}px;

      &:hover {
        background-color: black;
        color: white
      }
      &:after .searchBox {
        content: 'prova di stampa'
      }
      `
    }/>
  )
};  */

export {
  SidebarContainer,
  RowStuff,
  Logo,
  AppTitle,
  SearchBox,
  Button,
  SectionTitle,
  RavenSection,
  SectionBullet
};
