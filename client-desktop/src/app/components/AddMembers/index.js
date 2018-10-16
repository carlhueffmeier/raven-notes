import React, { Component } from 'react';

import { AddMembersContainer, MembersButtonContainer, Group, Members, Button } from './styles';
import CreateMemberDialog from '../CreateMemberDialog';

export default class AddMembers extends Component {
  state = {
    popped: false
  };

  handlePop = () => {
    this.setState({ popped: !this.state.popped })
  }


  render() {
    const { popped } = this.state;
    return (
      <AddMembersContainer>
      <CreateMemberDialog isVisible={popped} onDismiss={this.handlePop}/>
        <Group>Group name</Group>
        <MembersButtonContainer>
          <Members>12 members</Members>
          <Button onClick={this.handlePop}>Add Member</Button>
        </MembersButtonContainer>
      </AddMembersContainer>
    );
  }
}
