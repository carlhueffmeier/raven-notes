import React, { Component } from 'react';
import { SidebarContainer, H3, SName, USection, GSection, Sect, Img } from './styles';

import notes from '../../../assets/paper-plane.svg';
import extracts from '../../../assets/origami.svg';
import codeworks from '../../../assets/codeworks-logo.svg'

class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <H3>
          <span role="img" aria-label="monkey">
            🌚
          </span>
          Nikko89
        </H3>

        {/* Getting the notes and extracts from user. */}
        <USection>
          <SName>PRIVATE</SName>
          <Sect onClick={() => console.log('this is to show user notes')}>
            <Img src={notes}/>
            All Notes
          </Sect>
          <Sect onClick={() => console.log('this is to show extracts')}>
            <Img src={extracts}/>
            Extracts
          </Sect>
        </USection>

        <GSection>
          <SName>WORKSPACE</SName>
          <Sect onClick={() => console.log('this is to show groups notes')}>
            <Img src={codeworks}/>
            Codeworks
          </Sect>
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
