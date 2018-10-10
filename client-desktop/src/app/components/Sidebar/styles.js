import styled from "react-emotion";

const SidebarContainer = styled('div')`
  border-right: .1px solid #8c8b8b;
  padding: 15px;
  padding: 15px;
  background-color: lavender;
`
const H3 = styled('h3')`
  color: #778899;
  font-weight: 500;
  font-size: .9em;
  margin: 0;
`

const SName = styled('h1')`
  font-size: .8em;
  font-weight: 500;
  color: #778899;
  margin-bottom: 1vh;
`

const USection = styled('div')`
  font-weight: 600;
  padding: 1vh;
`

const GSection = styled('div')`
  font-weight: 500;
  color: #333;
  padding: 1vh;

`

const Sect = styled('p')`
  margin: 4px;
  font-size: .8em;
`

const SearchBox = styled("input")`
  border-radius: 20px;
  transition: 1s;
  margin: 0 5px;
  padding: 5px;
  text-indent: 8px;
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
  height: 27px;
  background-color: black;
  color: white;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  :hover {
    border: 1px solid white;
  }
`


export {
  SidebarContainer,
  SName,
  USection,
  GSection,
  Sect,
  H3,
  SearchBox,
  Button,
};
