
import { h, render, Component } from 'preact';
import FileDataAperture from './aperture/';
import FilePreview from './preview/';
import FileName from './name/';
import FileDataCamera from './camera/';
import FileDataExposure from './exposure/';
import FileDataFocalLength from './focalLength/';
import FileDataWhiteBalance from './whiteBalance/';
import FileDataDimensions from './dimensions/';
import FileDataDate from './date/';

import styles from './styles.css';

class FileList extends Component {
  /**
   * Class constructor
   * @ignore
   */
  constructor() {
    super();

  }

  /**
   * Component Render function
   * @param  {Object} props
   * @property {Function} onClick action to be fired when the user click a file.tags.
   * List of components currently implemented is:
   * - File Preview
   * - File name
   * - Dimensions
   * - Camera model
   * - Aperture
   * - [no-implemented] Depth of field and ISO
   * - Exposure
   * - Focal length
   * - [no-implemented] Histogram
   * - White Balance
   * - [no-implemented] Dimensions
   * - [no-implemented] Location
   * - Time/Date when the image was taken.
   *
   */
  render(props) {

    return (
      <div class={styles.fileList}>
      {props.files.map((file, index) =>
        <div>
          <FilePreview data={file}/>
          <FileName data={file}/>
          <FileDataDimensions data={file}/>
          <FileDataCamera data={file} />
          <FileDataAperture data={file} />
          <FileDataExposure data={file} />
          <FileDataFocalLength data={file} />
          <FileDataWhiteBalance data={file} />
          <FileDataDate data={file} />
        </div>
      )}
      </div>
    );
  }
}

export default FileList;
