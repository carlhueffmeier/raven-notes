const MAXIMUM_TITLE_LENGTH = 20;
const MAXIMUM_SNIPPET_LENGTH = 100;

function createNoteTitle(note) {
  if (!note.contentText) {
    return '';
  }
  const firstLine = note.contentText.split('\n')[0];
  return firstLine.slice(0, MAXIMUM_TITLE_LENGTH);
}

function createNoteSnippet(note) {
  if (!note.contentText) {
    return '';
  }
  const textBody = note.contentText
    .split('\n')
    .slice(1)
    .join('');
  return textBody.slice(0, MAXIMUM_SNIPPET_LENGTH);
}

export { createNoteTitle, createNoteSnippet };
