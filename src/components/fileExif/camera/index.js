
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FileDataCamera extends Component {
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
        <div class={styles.fileExifLabel}>Camera</div>
        <div class={styles.fileExifData}>
          {props.data.getTag('Model') ? props.data.getTag('Model').value : '-'}
        </div>
      </div>
    );
  }
}

export default FileDataCamera;
