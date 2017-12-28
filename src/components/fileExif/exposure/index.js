
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FileDataExposure extends Component {
  /**
   * Class constructor
   * @ignore
   */
  constructor() {
    super();

  }

  /**
   * Component Render function
   * @param  {Object} data component information
   */
  render(props) {
    return (
      <div class={styles.fileExif}>
        <div class={styles.fileExifLabel}>Exposure</div>
        <div class={styles.fileExifData}>
          {props.data.getTag('ExposureTime') ? props.data.getTag('ExposureTime').value : '-'}
        </div>
      </div>
    );
  }
}

export default FileDataExposure;
