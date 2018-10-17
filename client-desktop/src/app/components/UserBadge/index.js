import React, { Component } from 'react';
import { shape, string, func } from 'prop-types';
import { Container, Img, H3 } from './styles';
import defaultAvatar from '../../../assets/man.svg';

class UserBadge extends Component {
  static propTypes = {
    signout: func,
    user: shape({
      name: string
    })
  };

  render() {
    const { user } = this.props;
    return (
      <Container>
        <Img src={defaultAvatar} />
        <H3>{user && user.name}</H3>
      </Container>
    );
  }
}

export default UserBadge;
