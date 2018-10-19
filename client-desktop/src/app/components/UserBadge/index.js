import React, { Component } from 'react';
import { shape, string, func } from 'prop-types';
import { Container, H3 } from './styles';
import { UserIcon } from '../Icons';
import { withTheme } from 'emotion-theming';

class UserBadge extends Component {
  static propTypes = {
    signout: func,
    user: shape({
      name: string
    })
  };

  render() {
    const { user, theme } = this.props;
    return (
      <Container>
        <UserIcon style={{ color: theme.colors.text, marginRight: '5px' }} />
        <H3>{user && user.name}</H3>
      </Container>
    );
  }
}

export default withTheme(UserBadge);
