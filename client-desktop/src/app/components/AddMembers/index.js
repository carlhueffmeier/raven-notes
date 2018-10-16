import React, { Component } from 'react';
import user from '../../../assets/team.svg';
import { AddMembersContainer, MembersButtonContainer, Group, Members, Button } from './styles';
import CreateMemberDialog from '../CreateMemberDialog';

export default class AddMembers extends Component {
  state = {
    popped: false
  };

  handlePop = () => {
    this.setState({ popped: !this.state.popped });
  };

  render() {
    const { popped } = this.state;
    const { name, members } = this.props.currentGroup;
    return (
      <AddMembersContainer>
        <CreateMemberDialog isVisible={popped} onDismiss={this.handlePop} />
        <Group>{name}</Group>
        <MembersButtonContainer>
          <Members>
            {members
              ? members.length > 1
                ? members.length + ' Members'
                : members.length + ' Member'
              : 0 + ' Members'}
          </Members>
          <Button onClick={this.handlePop}>Add Member</Button>
        </MembersButtonContainer>
      </AddMembersContainer>
    );
  }
}
