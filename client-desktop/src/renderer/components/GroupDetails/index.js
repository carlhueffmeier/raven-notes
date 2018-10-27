import React, { Component } from 'react';
import { Container, MembersButtonContainer, Group, Members, Button } from './styles';
import { SizeMe } from 'react-sizeme';

class GroupDetails extends Component {
  render() {
    const { currentGroup: { name, members } = {}, showAddMemberDialog } = this.props;
    return (
      <SizeMe>
        {({ size }) => (
          <Container>
            <Group large={size.width > 300}>{name}</Group>
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
        )}
      </SizeMe>
    );
  }
}

export default GroupDetails;
