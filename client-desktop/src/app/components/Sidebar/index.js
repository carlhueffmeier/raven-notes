import React, { Component } from 'react';
import {
  SidebarContainer,
  InlineRow,
  MainLogo,
  AppTitle,
  SearchBox,
  Button,
  SectionTitle,
  Section,
  SectionBullet
} from './styles';
import { BrandIcon } from '../Icons';

export default class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <InlineRow>
          <MainLogo>
            <BrandIcon />
          </MainLogo>
          <AppTitle>Raven</AppTitle>
        </InlineRow>
        <h3>
          Hello, <span>Name!</span>
        </h3>
        <InlineRow>
          <SearchBox type="search" />
          <Button>Go!</Button>
        </InlineRow>

        <Section>
          <SectionTitle>My Notes</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>My Extracts</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>Groups</SectionTitle>
          <ul>
            <SectionBullet>Ciao!</SectionBullet>
            <SectionBullet>Ciao!</SectionBullet>
          </ul>
        </Section>
        <Section>
          <SectionTitle>Favorites</SectionTitle>
        </Section>
      </SidebarContainer>
    );
  }
}
