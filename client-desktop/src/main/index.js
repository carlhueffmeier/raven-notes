'use strict';

import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';
import { createMenu } from './menu';

const isDevelopment = process.env.NODE_ENV !== 'production';

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

// Install DevTools
async function installDevTools() {
  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS
  } = require('electron-devtools-installer');
  try {
    await installExtension(REACT_DEVELOPER_TOOLS.id);
  } catch (error) {
    console.warn(error);
  }
  try {
    await installExtension(REDUX_DEVTOOLS.id);
  } catch (error) {
    console.warn(error);
  }
}

function createMainWindow() {
  const browserWindowConfiguration = {
    width: 900,
    height: 600,
    minHeight: 400,
    minWidth: 600,
    titleBarStyle: 'hidden'
  };
  const window = new BrowserWindow(browserWindowConfiguration);

  const menu = createMenu({ window });
  Menu.setApplicationMenu(menu);

  if (isDevelopment) {
    installDevTools();
    window.webContents.openDevTools();
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
      })
    );
  }

  window.on('closed', () => {
    mainWindow = null;
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  return window;
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});
