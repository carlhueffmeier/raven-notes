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

const USection = styled('div')`
  // background-color: #F9F9F9;
  font-weight: 600;
  margin-top: 10px;
`

const GSection = styled('div')`
  font-weight: 500;
  color: #333;
  margin-top: 10px;
`

const Sect = styled('p')`
  margin: 4px;
  font-size: .8em;
`

const Divider =styled('hr')`
  border-bottom: .1px solid #8c8b8b;
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
  USection,
  GSection,
  Sect,
  H3,
  Divider,
  SearchBox,
  Button,
};
