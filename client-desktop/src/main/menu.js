import { app, Menu } from 'electron';

function createMenu({ window }) {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open Folder',
          accelerator: 'CmdOrCtrl+O'
        },
        { label: 'Open File' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        {
          label: 'Toggle Dark Mode 🦉',
          accelerator: 'CmdOrCtrl+P',
          click() {
            window.webContents.send('toggle-dark-mode');
          }
        },
        {
          label: 'Three Column View',
          accelerator: 'CmdOrCtrl+1',
          click() {
            window.webContents.send('toggle-layout-1');
          }
        },
        {
          label: 'Group View',
          accelerator: 'CmdOrCtrl+2',
          click() {
            window.webContents.send('toggle-layout-2');
          }
        },
        {
          label: 'Focus View',
          accelerator: 'CmdOrCtrl+3',
          click() {
            window.webContents.send('toggle-layout-3');
          }
        }
      ]
    },
    {
      role: 'window',
      submenu: [{ role: 'minimize' }, { role: 'close' }]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click() {
            require('electron').shell.openExternal('https://electronjs.org');
          }
        }
      ]
    },
    {
      label: 'Developer',
      submenu: [
        {
          label: '👨‍💻 Toggle Developer Tools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click() {
            window.webContents.toggleDevTools();
          }
        }
      ]
    }
  ];

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services', submenu: [] },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        {
          label: 'Sign out',
          click() {
            window.webContents.send('signout');
          }
        },
        { role: 'quit' }
      ]
    });

    // Edit menu
    template[2].submenu.push(
      { type: 'separator' },
      {
        label: 'Speech',
        submenu: [{ role: 'startspeaking' }, { role: 'stopspeaking' }]
      }
    );

    // Window menu
    template[4].submenu = [
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' }
    ];
  } else {
    template.splice(4, 0, {
      label: 'Account',
      submenu: [
        {
          label: 'Sign out',
          click() {
            window.webContents.send('signout');
          }
        }
      ]
    });
  }

  const menu = Menu.buildFromTemplate(template);
  return menu;
}

export { createMenu };
