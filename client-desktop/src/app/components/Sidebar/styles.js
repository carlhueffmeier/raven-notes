import styled from 'react-emotion';

const SidebarContainer = styled('div')`
  height: 100vh;
  padding: 25px 15px 0 15px;
  overflow: auto;
  background-color: ${props => props.theme.colors.primary};
`;

const H3 = styled('h3')`
  color: #778899;
  font-weight: 500;
  font-size: 0.9em;
  margin: 0;
  text-align: left;
  height: 100%;
  padding: 0.8rem;
  background-color: ${props => props.theme.colors.secondary};
`;

const SectionTitle = styled('div')`
  font-size: 0.8em;
  font-weight: 500;
  color: #778899;
  text-transform: uppercase;
`;

const GroupSection = styled('div')`
  font-weight: 500;
  color: #333;
  margin-top: 1.5rem;
`;

const GroupSectionHeader = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const GroupListItem = styled('div')`
  margin: 4px;
  max-width: auto;
  font-size: 0.8em;
  padding-bottom: 2px;
  display: inline-flex;
  line-height: 20px;
  cursor: pointer;
  :hover {
    color: peachpuff;
  }
  & p {
    margin: 0;
  }
  & img:hover {
    transition: all 0.3s ease-in-out 0.2s;
    transform: rotateZ(360deg);
  }
  & img {
    ${props => props.selected && `filter: brightness(1.5)`};
  }
  ${props => props.selected && `color: ${props.theme.colors.primary}`};
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

const GroupInitial = styled('div')`
  width: 20px;
  height: 20px;
  padding: 5px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  text-align: center;
  font-size: 0.8em;
  font-weight: 600;
  min-width: 20px;
  color: black;
  & > p {
    margin: 0;
    line-height: 12px;
  }
`;

const AddGroupButton = styled('button')`
  background: transparent;
  border: none;
  padding: 0 5px;
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 8px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

const ButtonAddImg = styled('img')`
  width: 15px;
`;

export {
  SidebarContainer,
  SectionTitle,
  GroupSection,
  GroupSectionHeader,
  GroupListItem,
  SearchBox,
  Button,
  GroupInitial,
  GroupName,
  AddGroupButton,
  ButtonAddImg
};
