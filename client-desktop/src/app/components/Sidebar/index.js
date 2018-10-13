import React, { Component } from 'react';
import { SidebarContainer, H3, SName, USection, GSection, Sect, Img, GroupName } from './styles';

import notes from '../../../assets/paper-plane.svg';
import extracts from '../../../assets/origami.svg';
import codeworks from '../../../assets/codeworks-logo.svg';
import user from '../../../assets/man.svg';

class Sidebar extends Component {
  render() {
    const { groups, selectGroup } = this.props;
    return (
      <SidebarContainer>
        <H3>
          <Img src={user} />
          Nikko89
        </H3>

        {/* Getting the notes and extracts from user. */}
        <USection>
          <SName>PRIVATE</SName>
          <Sect onClick={() => console.log('this is to show user notes')}>
            <Img src={notes} />
            All Notes
          </Sect>
          <Sect onClick={() => console.log('this is to show extracts')}>
            <Img src={extracts} />
            Extracts
          </Sect>
        </USection>

        <GSection>
          <SName>WORKSPACE</SName>
          {groups.map(group => (
            <Sect key={group.id} onClick={() => selectGroup(group.id)}>
              <Img src={codeworks} />
              {group.name}
            </Sect>
          ))}
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
