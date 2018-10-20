import React from 'react';
import { NoSelection } from './styles.js';

function NoNoteSelected() {
  return (
    <NoSelection>
      <span className="text">No note selected</span>
    </NoSelection>
  );
}

export default NoNoteSelected;
