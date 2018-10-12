import styled from 'react-emotion';

const SearchBox = styled('input')`
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

export { SearchBox };
