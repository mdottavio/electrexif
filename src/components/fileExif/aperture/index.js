
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FileDataAperture extends Component {
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
        <div class={styles.fileExifLabel}>Aperture</div>
        <div class={styles.fileExifData}>
          {props.data.getTag('ApertureValue') ? props.data.getTag('ApertureValue').value : '-'}
        </div>
      </div>
    );
  }
}

export default FileDataAperture;
