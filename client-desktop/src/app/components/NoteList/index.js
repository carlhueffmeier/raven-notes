import React, { Component } from 'react';
import {array} from 'prop-types';
import SingleNote from './single';
import { NoteListContainer } from './styles';
import { Query } from "react-apollo";
import { GET_NOTES_FROM_SERVER } from '../../graphql/queries';


class NoteList extends Component {
  static propTypes = {
    notes: array
  }

  // If no note is open on the right side, show the list width 100%, if not show the list 25vw is now.
  render() {
    return (
      <Query query={GET_NOTES_FROM_SERVER}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>There's an error</p>
          const notes = data.notes
          return (
            <NoteListContainer>
              {notes.map(note => <SingleNote key={note.id} note={note} />)}
            </NoteListContainer>
          )
        }}
      </Query>
    );
  }
}

export default NoteList;
