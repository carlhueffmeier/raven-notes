import styled from 'react-emotion';

const AddMembersContainer = styled('div')`
  padding: 0 15px;
  padding-top: 20px;
  margin: 0;
`;

const Group = styled('div')`
  font-weight: 500;
  font-size: 0.8em;
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
`;

const Button = styled('button')`
  background-color: #FEC66C;
  border-radius: 50px;
  border: none;
  height: 2vh;
  flex-direction: row;
  justify-content: space-evenly;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.7em;
`;

export {
  AddMembersContainer,
  MembersButtonContainer,
  Group,
  Members,
  Button
}