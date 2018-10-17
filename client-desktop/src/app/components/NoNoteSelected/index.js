import React from 'react';
import { NoSelection } from './styles.js';

function NoNoteSelected() {
  return (
    <NoSelection>
      No note selected{' '}
      <span role="img" aria-labelledby="babychick">
        🐣
      </span>
    </NoSelection>
  );
}

export default NoNoteSelected;
