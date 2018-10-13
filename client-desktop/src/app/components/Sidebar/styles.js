import styled from 'react-emotion';

const SidebarContainer = styled('div')`
  height: 100%;
  padding: 15px;
  padding: 15px;
  background-color: #f7f6f3;
`;
const H3 = styled('h3')`
  color: #778899;
  font-weight: 500;
  font-size: 0.9em;
  margin: 0;
`;

const SName = styled('h1')`
  font-size: 0.8em;
  font-weight: 500;
  color: #778899;
  margin-bottom: 1vh;
`;

const USection = styled('div')`
  font-weight: 600;
  padding: 1vh;
`;

const GSection = styled('div')`
  font-weight: 500;
  color: #333;
  padding: 1vh;
`;

const Sect = styled('p')`
  margin: 4px;
  font-size: 0.8em;
  padding-bottom: 2px;
`;

const SearchBox = styled('input')`
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

const Button = styled('button')`
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

const Img = styled('img')`
  height: 2.6vh;
  padding-right: 2px;
  vertical-align: middle;
`;


export { SidebarContainer, SName, USection, GSection, Sect, H3, SearchBox, Button, Img };
