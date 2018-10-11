import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SidebarContainer, H3, SName, USection, GSection, Sect } from './styles';

import { Query } from 'react-apollo';
import { GET_NOTES_FROM_SERVER, GET_GROUP_NOTES, GET_USER_NOTES } from '../../graphql/queries';


class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <H3><span role='img' aria-label='monkey'>🐒</span>Nikko89</H3>
        <H3><span role='img' aria-label='monkey'>🐒</span>Nikko89</H3>

        {/* Getting the notes and extracts from user. */}
        <USection>
          <SName>PRIVATE</SName>
          <Query query={GET_USER_NOTES}>
            {({loading, error, data}) => {
              if (loading) return <p>Loading</p>
              if (error) return <p>There's an error...</p>
              const notes = data.userses[0].authoredNotes
              console.log('users notes', data.userses)
              return(
                <Sect
                  onClick={() => this.props.display(notes)}>
                  <span role='img' aria-label='monkey'>🌼</span>
                  All Notes
                </Sect>
              )
            }}
          </Query>
          <Sect><span role='img' aria-label='monkey'>🌼</span> Extracts</Sect>
        </USection>


        {/* Getting the notes from the selected group. */}
        <GSection>
        <SName>WORKSPACE</SName>
          <Query query={GET_GROUP_NOTES}>
          {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>There's an error.</p>
            const groups = data.groups
            console.log('data from query', data)
            return (
              groups.map((group, i) => {
              return (
                <Sect
                  key={i}
                  group={group}
                  onClick={() => console.log(group) || this.props.display(group.notes)}>
                    <span role='img' aria-label='monkey'>🌞</span>{groups[i].name}
                </Sect>
              )
              })
            )
          }}
        </Query>
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
