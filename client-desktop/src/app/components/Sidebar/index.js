import React, { Component } from 'react';
import { Container } from './styles';
import UserBadgeContainer from '../../containers/UserBadgeContainer';
import GroupListContainer from '../../containers/GroupListContainer';

class Sidebar extends Component {
  render() {
    return (
      <Container>
        <UserBadgeContainer />
        <GroupListContainer />
      </Container>
    );
  }
}

export default Sidebar;
