import styled from 'react-emotion';

const Title = styled('h1')`
  font-size: 1.4em;
  margin-top: 40px;
  font-weight: 800;
  color: ${props => props.theme.colors.text};
`;

export { Title };
