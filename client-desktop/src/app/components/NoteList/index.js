import React, { Component } from 'react';
import {array} from 'prop-types';
import SingleNote from './single';
import { NoteListContainer } from './styles';
import { Query } from "react-apollo";
import { GET_NOTES_FROM_SERVER, GET_CURRENT_GROUP_NOTES } from '../../graphql/queries';


class NoteList extends Component {
  static propTypes = {
    notes: array
  }

  // If no note is open on the right side, show the list width 100%, if not show the list 25vw is now.
  render() {
    return (
      // <Query query={GET_CURRENT_GROUP_NOTES}>
        // {({loading, error, data}) => {
        // if (loading) return <p>Loading...</p>
        // if (error) return <p>There's an error.</p>
        // console.log('NOTE LIST', data)
        // if (!Object.keys(data).length) data = {groups: [{notes: []}]}
        // const notes = this.props.
        // const notes = data
        // console.log('notes', notes)
        // return typeof data.groups === 'object' && !Array.isArray(data.groups) ? (
          <NoteListContainer>
            {this.props.notes.map(note => <SingleNote key={note.id} note={note} /> ) || <p>Ooops...</p>}
          </NoteListContainer>
        // ) : ''
        // }}
      // </Query>
    )
  }
}

export default NoteList;
