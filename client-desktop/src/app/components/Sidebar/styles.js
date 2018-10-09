import styled from "react-emotion";

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
`;

const InlineRow = styled("div")`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const MainLogo = styled("div")`
  font-size: 2rem;
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
`;

const SectionTitle = styled("h3")`
  font-weight: bold;
`;

const Section = styled("section")`
  text-indent: 5px;
  width: 100%;
  align-items: flex-start;
`;

const SectionBullet = styled("li")`
  list-style-type: none;
  margin: 5px 0;
`;

export {
  SidebarContainer,
  InlineRow,
  MainLogo,
  AppTitle,
  SearchBox,
  Button,
  SectionTitle,
  Section,
  SectionBullet
};
