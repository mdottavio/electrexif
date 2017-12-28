
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FileDataDate extends Component {
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
        <div class={styles.fileExifLabel}>Date</div>
        <div class={styles.fileExifData}>
          {props.data.getTag('DateTimeOriginal') ? props.data.getTag('DateTimeOriginal').value : '-'}
        </div>
      </div>
    );
  }
}

export default FileDataDate;
