import styled from 'react-emotion';

const SidebarContainer = styled('div')`
  height: 100%;
  // border-right: 0.4px solid rgba(119, 136, 153, 0.8);
  padding: 25px 15px 0 15px;
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
  display: flex;
  line-height: 20px;
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

const GroupName = styled('span')`
  flex-basis: 80%;
  :active {
    text-decoration: underline;
  }
  line-height: 20px;
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
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

//==================== POP UP
const PopUpContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lavender;
`;

const TitlePop = styled('h1')`
  font-size: 1.6em;
  margin: 10px;
`;

const InputContainer = styled('div')`
  flex-direction: row;
`

const Input = styled('input')`
  margin: 0px 15px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: black;
  border: none;
  padding: 0.5em 1.5em 1.5em 0.8em;
  border-bottom: 1.2px solid #a8a497;
  text-transform: uppercase;
  :focus {
    outline: none;
  }
  :nth-child(1) {
    flex-basis: 15%;
  }
  :nth-child(2) {
    flex-basis: 15%;
  }
`;

const ButtonPop = styled('button')`
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.6em;
  cursor: pointer;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  margin: 10px;
  background-color: pink;
`;


export {
  SidebarContainer,
  SName,
  USection,
  GSection,
  Sect,
  H3,
  SearchBox,
  Button,
  Img,
  GroupName,
  PopUpContainer,
  Input,
  TitlePop,
  ButtonPop,
  InputContainer
};
