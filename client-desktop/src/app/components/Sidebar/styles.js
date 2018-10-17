import styled from 'react-emotion';

const SidebarContainer = styled('div')`
  display: flex;
  height: 100vh;
  overflow: auto;
  background-color: ${props => props.theme.colors.secondary};
  flex-flow: column wrap;
`;

const SectionTitle = styled('div')`
  font-size: 0.8em;
  font-weight: 500;
  color: ${props => props.theme.colors.sectionTitle};
  text-transform: uppercase;
`;

const GroupSection = styled('div')`
  padding: 0 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.pdark};
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
    color: ${props => props.theme.colors.textHover};
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
  color: ${props => props.theme.colors.plight}
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

const ButtonSignOut = styled('button')`
  margin-top: auto;
  height: 40px;
  width: 150px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 0.8em;
  background-color: ${props => props.theme.colors.primary};
  :focus {
    outline: 0;
  }
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
  ButtonAddImg,
  ButtonSignOut
};
