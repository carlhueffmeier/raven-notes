import styled from 'react-emotion';

const SearchBox = styled("input")`
  border-radius: 20px;
  transition: 1s;
  margin: 0 5px;
  padding: 5px;
  text-indent: 8px;
  margin-bottom: 15px;
  :hover,
  :focus {
    background-color: black;
    color: #2bff00;
  }
  :focus {
    outline: 0;
  }
`;

export {
  SearchBox
}

