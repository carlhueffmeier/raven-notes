import styled from 'react-emotion';

const Container = styled('div')`
  padding: 0 15px;
  padding-top: 20px;
  margin: 0;
`;

const Group = styled('div')`
  height: 1.5rem;
  font-weight: 500;
  font-size: ${props => (props.large ? '1.5rem' : '0.8rem')};
  margin-bottom: 5px;
`;

const MembersButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Members = styled('div')`
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 1.2em;
  color: ${props => props.theme.colors.primary};
`;

const Button = styled('button')`
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50px;
  border: none;
  height: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.7em;
  :focus {
    outline: none;
  }
`;

export { Container, MembersButtonContainer, Group, Members, Button };
