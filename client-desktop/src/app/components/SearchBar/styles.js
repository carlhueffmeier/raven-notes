import styled from 'react-emotion';

const SearchBox = styled('input')`
  height: 3vh;
  width: 15vw;
  border-radius: 20px;
  border: 0.5px solid #ccc;
  margin: 0 10px;
  margin-top: 10px;
  padding: 5px;
  text-indent: 8px;
  :hover,
  :focus {
    background-color: #fafafa;
    color: #000;
    outline: 0;
  }
`;

//Create button styling is in this page, the button is in the same component.
const CreateButton = styled('button')`
  width: 20%;
  background: transparent;
  border: none;
  vertical-align: middle;
  margin-left: -10px;
  :focus {
    outline: none
  }
`;

const CreateImg = styled('img')`
  height: 2.6vh;
  vertical-align: middle;

`

export { SearchBox, CreateButton, CreateImg };
