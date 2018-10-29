import React, { Component } from 'react';
import { Container, MembersButtonContainer, Group, Members, Button } from './styles';

class GroupDetails extends Component {
  render() {
    const { currentGroup: { name, members } = {}, showAddMemberDialog, spacious } = this.props;
    return (
      <Container>
        <Group large={spacious}>{name}</Group>
        <MembersButtonContainer>
          <Members>
            {members
              ? members.length > 1
                ? members.length + ' Members'
                : members.length + ' Member'
              : 0 + ' Members'}
          </Members>
          <Button onClick={showAddMemberDialog}>+ Member</Button>
        </MembersButtonContainer>
      </Container>
    );
  }
}

export default GroupDetails;
