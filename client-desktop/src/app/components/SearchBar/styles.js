import styled from 'react-emotion';

const SearchBox = styled('input')`
  height: 5vh;
  border-radius: 20px;
  border: 0.5px solid #ccc;
  transition: 1s;
  margin: 0 10px;
  margin-top: 10px;
  padding: 5px;
  text-indent: 8px;
  :hover,
  :focus {
    background-color: #fafafa;
    color: #000;
  }
  :focus {
    outline: 0;
  }
`;

//Create button styling is in this page, the button is in the same component.
const CreateButton = styled('button')`
  background-color: lavender;
  width: 10vh;
  height: 10vh;
`

export { SearchBox, CreateButton };
