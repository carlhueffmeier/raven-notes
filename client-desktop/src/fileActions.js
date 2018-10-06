const { dialog } = require('electron');
const fs = require('fs');

function createFileActions({ mainWindow }) {
  return {
    openFile
  };

  function openFile() {
    // Show file dialog for Markdown files
    const files = dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [{ name: 'Markdown', extensions: ['md', 'markdown', 'txt'] }]
    });

    // Return if no files were selected
    if (!files) return;

    // Load the filepath returned by the dialog
    const file = files[0];
    const fileContent = fs.readFileSync(file).toString();

    // Send file content to renderer
    mainWindow.webContents.send('new-file', fileContent);
  }
}

exports.createFileActions = createFileActions;
