import styled from 'react-emotion';
import { IdeaIcon } from '../Icons';

const Title = styled('h1')`
  font-size: 1.4em;
  margin-top: 40px;
  font-weight: 800;
  color: ${props => props.theme.colors.text};
`;

const StyledIdeaIcon = styled(IdeaIcon)`
  font-size: 5rem;
`;

export { Title, StyledIdeaIcon };
