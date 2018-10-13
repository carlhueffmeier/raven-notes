import styled from 'react-emotion';

const SearchBox = styled('input')`
  height: 25px;
  flex: 3 1;
  border-radius: 20px;
  border: 0.5px solid #ccc;
  margin: 0 10px;
  padding: 5px;
  text-indent: 12px;
  :hover,
  :focus {
    background-color: #fafafa;
    color: #000;
    outline: 0;
  }
`;

//Create button styling is in this page, the button is in the same component.
const CreateButton = styled('button')`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: -10px;
  :focus {
    outline: none;
  }
`;

const CreateImg = styled('img')`
  height: 23px;
  padding: 1px;
  vertical-align: middle;
`;

export { SearchBox, CreateButton, CreateImg };
