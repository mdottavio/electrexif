
import { h, render } from 'preact';
import ElectrExif from './components/electrExif';

const ipcRenderer = require('electron').ipcRenderer;

const start = () => {
  render(<ElectrExif ipc={ipcRenderer}/>, document.getElementById('app'));
};

start();
