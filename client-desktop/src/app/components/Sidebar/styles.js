import styled from 'react-emotion';

const SidebarContainer = styled('div')`
  height: 100%;
  // border-right: 0.4px solid rgba(119, 136, 153, 0.8);
  padding: 25px 15px 0 15px;
  background-color: ${props => props.theme.colors.primary};
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

const Sect = styled('div')`
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

const GroupInitial = styled('div')`
  width: 20px;
  height: 20px;
  padding: 5px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.pdark};
  border-radius: 50%;
  text-align: center;
  font-size: 0.8em;
  font-weight: 600;
  min-width: 20px;
  & p {
    margin: 0;
    line-height: 12px;
  }
`;

//==================== POP UP
const PopUpContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitlePop = styled('h1')`
  font-size: 1.4em;
  margin: 10px;
`;

const InputContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;

`;

const Input = styled('input')`
  width: 50%;
  flex-direction: row;
  margin: 0px 15px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  color: black;
  border: none;
  border-bottom: 1.2px solid #a8a497;
  text-align: center;

  :focus {
    outline: none;
  }
`;

const ButtonPop = styled('button')`
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.8em;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  margin: 10px;
  background-color: ${props => props.theme.colors.pdark};;
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
  GroupInitial,
  GroupName,
  PopUpContainer,
  Input,
  TitlePop,
  ButtonPop,
  InputContainer,
};
