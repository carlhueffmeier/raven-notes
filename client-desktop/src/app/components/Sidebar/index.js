import React, { Component } from 'react';
import { SidebarContainer, H3, SName, USection, GSection, Sect } from './styles';

class Sidebar extends Component {

  render() {
    return (
      <SidebarContainer>
        <H3><span role='img' aria-label='monkey'>🌚</span>Nikko89</H3>

        {/* Getting the notes and extracts from user. */}
        <USection>
          <SName>PRIVATE</SName>
            <Sect>
              <span role='img' aria-label='monkey'>🌼</span>
              All Notes
            </Sect>
          <Sect><span role='img' aria-label='monkey'>🌼</span> Extracts</Sect>
        </USection>

        <GSection>
          <SName>WORKSPACE</SName>
            <Sect>
                <span role='img' aria-label='monkey'>🌞</span> Codeworks
            </Sect>
          </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
