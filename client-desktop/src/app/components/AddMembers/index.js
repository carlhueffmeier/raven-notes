import React, { Component } from 'react';

import { AddMembersContainer, MembersButtonContainer, Group, Members, Button } from './styles';

export default class AddMembers extends Component {

  render() {
    return (
      <AddMembersContainer>
        <Group>Group name</Group>
        <MembersButtonContainer>
          <Members>12 members</Members>
          <Button>Add Member</Button>
        </MembersButtonContainer>
      </AddMembersContainer>
    );
  }
}
