const {app, Tray, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const appIconActive = path.join(__dirname, 'static', 'tray.png');
const appUrl = process.env.NODE_ENV === 'dev' ? 'http://localhost:8080' : `file://${__dirname}/dist/index.html`;
const defaultWindowSize = {
  width: 280,
  height: 244,
};
// for debugging purpose
if (process.env.NODE_ENV === 'dev') {
  require('electron-debug')({showDevTools: true});
}

/**
 * Determinate the window's position based on the tray icon
 * @return {Object} X, Y position in pixels
 */
const calculateWinPos = () => {
  const windowBounds = win.getBounds()
  const trayBounds = tray.getBounds()

  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4)

  return {x: x, y: y}
};

let win;
let tray;

const showWindow = () => {
  win.setSize(defaultWindowSize.width, defaultWindowSize.height);
  const pos = calculateWinPos();
  win.setPosition(pos.x, pos.y);
  win.show();
};

app.on('ready', () => {
  app.dock.hide();

  tray = new Tray(appIconActive);
  tray.setToolTip('ElectrExif');

  win = new BrowserWindow({
    title: 'ElectrExif',
    width: defaultWindowSize.width,
    height: defaultWindowSize.height,
    frame: false,
    transparent: true,
    movable: false,
    show: false,
    alwaysOnTop: true,
    webPreferences: {
      webSecurity: false
    }
  });
  win.loadURL(appUrl);
  win.on('blur', () => {
    win.hide();
    win.loadURL(appUrl);
  });

  tray.on('click', (e, bounds) => {
    showWindow();
  });

  tray.on('drop-files', function(event, files) {
    console.log('new files droped to the tray', files);
  });

  ipcMain.on('showing-exif', (event, weather) => {
    win.setSize(defaultWindowSize.width, defaultWindowSize.height + 30, true);
  });

  ipcMain.on('reset-size', (event, weather) => {
    win.setSize(defaultWindowSize.width, defaultWindowSize.height, true);
  });

});
