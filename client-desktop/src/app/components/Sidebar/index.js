import React, { Component } from "react";
import { func, string } from "prop-types";
// eslint-disable-next-line no-unused-vars
import {
  SidebarContainer,
  RowStuff,
  Logo,
  AppTitle,
  SearchBox,
  Button,
  SectionTitle,
  RavenSection,
  SectionBullet
} from "./styles";
import LogoB from "./assets/logo.svg";

export default class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <RowStuff>
          <Logo src={LogoB} alt="logo" />
          <AppTitle>Raven</AppTitle>
        </RowStuff>
        <h3>
          Hello, <span>Name!</span>
        </h3>
        <RowStuff>
          <SearchBox type="search" />
          <Button>Go!</Button>
        </RowStuff>

        <RavenSection>
          <SectionTitle>My Notes</SectionTitle>
        </RavenSection>
        <RavenSection>
          <SectionTitle>My Extracts</SectionTitle>
        </RavenSection>
        <RavenSection>
          <SectionTitle>Groups</SectionTitle>
          <ul>
            <SectionBullet>Ciao!</SectionBullet>
            <SectionBullet>Ciao!</SectionBullet>
          </ul>
        </RavenSection>
        <RavenSection>
          <SectionTitle>Favorites</SectionTitle>
        </RavenSection>
      </SidebarContainer>
    );
  }
}
