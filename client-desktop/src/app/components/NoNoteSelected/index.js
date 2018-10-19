import React from 'react';
import { NoSelection } from './styles.js';

function NoNoteSelected() {
  return (
    <NoSelection>
      <p className="text">No note selected</p>
      <span role="img" aria-labelledby="babychick">
        🐣
      </span>
    </NoSelection>
  );
}

export default NoNoteSelected;
