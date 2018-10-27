import styled from 'react-emotion';

const SectionTitle = styled('div')`
  font-size: 0.8em;
  font-weight: 500;
  color: ${props => props.theme.colors.sectionTitle};
  text-transform: uppercase;
`;

const GroupSection = styled('div')`
  padding: 0 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
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
  transition: 200ms color;
  :hover {
    color: ${props => props.theme.colors.textHover};
  }
  ${props => props.selected && `color: ${props.theme.colors.primary}`};
`;

const AddGroupButton = styled('button')`
  background: transparent;
  border: none;
  padding: 0 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export { SectionTitle, GroupSection, GroupSectionHeader, GroupListItem, AddGroupButton };
