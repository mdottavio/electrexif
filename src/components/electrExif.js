
import { h, Component } from 'preact';
import styles from './electrExif.css';

import File from '../models/file';

import DragBox from './dragbox/dragbox';
import FileExif from './FileExif/fileExif';

const ExifReader = require('../../node_modules/exifreader/dist/exif-reader.js');

class ElectrExif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      error: false
    };
    this.setFile = this.setFile.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
  }

  /**
   * Send messages to the main IPC procces
   * @param  {String} message
   */
  sendMsg(msg) {
    this.props.ipc.send(msg);
  }
  /**
   * Get info from a list of dropped files and concatenate them to
   * the list.
   * @param {FileList} files List of files from a dropped action.
   */
  setFile(files) {
    const fileList = [];
    const state = this;
    /**
     * Cast the FileList Object to an Array to
     * use map
     */
    [].slice.call(files).map((file) => {
      state.setState({
        error: false
      });
      const reader = new FileReader();
      reader.onload = function (event) {
        try {
          state.addFile(file, ExifReader.load(event.target.result));
        } catch (error) {
          console.log(error);
          state.setState({
            error: true
          });
        }
      }
      reader.readAsArrayBuffer(file.slice(0, 128 * 1024));
    });
  }

  addFile(file, exifTags) {

    // The MakerNote tag can be really large. Remove it to lower
    // memory usage if you're parsing a lot of files and saving the
    // tags.
    delete exifTags['MakerNote'];
    const newFile = new File(file.name, file.path ? `file://${file.path}` : '');
    newFile.tags = exifTags;
    this.setState({
      files: [newFile]
    });
    // comunicate the main procces to update the window's size.
    this.sendMsg('showing-exif');
  };

  /**
   * Handle new drags
   */
  dragOver() {
    this.setState({
      files: []
    });
    this.sendMsg('reset-size');
  }

  /**
   * Remove a file from the list.
   * @param  {Number} index Index of the file to remove.
   */
  removeFile(index) {
    const fileList = this.state.files;
    fileList.splice(index,1);
    this.setState({
      files: fileList,
    });
  }

  render(props, state) {
    return (
      <div class={styles.container}
        ondragover={this.dragOver}
      >
        {(this.state.files.length === 0) ? (
        <DragBox onChange={this.setFile} error={this.state.error}/>
        ) : (
        <FileExif files={this.state.files} onRemove={this.removeFile}/>
        ) }
      </div>
    );
  }
};


export default ElectrExif;
