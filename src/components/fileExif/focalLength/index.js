
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FileDataFocalLength extends Component {
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
        <div class={styles.fileExifLabel}>Focal Length</div>
        <div class={styles.fileExifData}>
          {props.data.getTag('FocalLength') ? props.data.getTag('FocalLength').value : '-'}
        </div>
      </div>
    );
  }
}

export default FileDataFocalLength;
