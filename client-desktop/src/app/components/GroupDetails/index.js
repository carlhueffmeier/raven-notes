import React, { Component } from 'react';
import { Container, MembersButtonContainer, Group, Members, Button } from './styles';
import AddMemberDialog from '../AddMemberDialog';

class GroupDetails extends Component {
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
      <Container>
        <AddMemberDialog isVisible={popped} onDismiss={this.handlePop} />
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
      </Container>
    );
  }
}

export default GroupDetails;
