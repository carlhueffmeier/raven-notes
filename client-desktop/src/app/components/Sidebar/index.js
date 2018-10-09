import React, { Component } from "react";
import {
  SidebarContainer,
  H3,
  USection,
  GSection,
  Sect,
  Divider
} from "./styles";
class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <H3><span role='img' aria-label='monkey'>🐒</span> User Name</H3>
        <p>PRIVATE</p>
        <USection>
          <Sect><span role='img' aria-label='monkey'>🌼</span> All Notes</Sect>
          <Sect><span role='img' aria-label='monkey'>🌼</span> Extracts</Sect>
        </USection>
        <p>WORKSPACE</p>
        <GSection>
        <Sect><span role='img' aria-label='monkey'>🌞</span>Codeworks</Sect>
        <Sect><span role='img' aria-label='monkey'>🌞</span>Sassy Designers</Sect>
        <Sect><span role='img' aria-label='monkey'>🌞</span>ReactJS</Sect>
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
