
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FileDataWhiteBalance extends Component {
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
        <div class={styles.fileExifLabel}>White Balance</div>
        <div class={styles.fileExifData}>
          {props.data.getTag('WhiteBalance') ? (
            <span>{props.data.getTag('WhiteBalance').value === '1' ? 'Manual' : 'Auto'}</span>
          ) : (
            <span>-</span>
          )}
        </div>
      </div>
    );
  }
}

export default FileDataWhiteBalance;
